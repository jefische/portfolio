---
title: "Resume Interview Answers"
description: "Context for projects and my past resume experiences"
pubDate: "May 17, 2026"
heroImage: "/post_img.webp"
tags: ["Essay"]
order: 19
---

## Secret Santa Exchange

Implemented real-time gift suggestion delivery using Supabase WebSocket subscriptions, eliminating manual page refreshes by listening for database INSERT events and filtering results per authenticated user.

## Explanation

Gift suggestions are generated concurrently on the server (using OpenAI) allowing gift generation to start for every participant in the group at the same time. This is just a feature of calling the `generateAndStoreSuggestions` inside of the array.map() function which starts all calls one after the other. `generateAndStoreSuggestions` is not awaited, and is therefore a fire and forget function that allows the API to continue updating the gift exchange status to `active` and then the server to return an HTTP response to the client. This allows the browser refresh via `location.reload()` and the page to render the `WaitingForSuggestions` component. Now previously, the user had to refresh the page continuously, until all gift suggestions had finished populating in the database. The WebSocket lets the UI update in **real-time** as each suggestion is inserted into the database, which allows the `WaitingForSuggestions` component to unmount as suggestions stream in one by one via this channel and the `giftSuggestions` array is populated.

Note that the channel listens for database INSERT events, and sends a payload for each new record added. We add a filter on the DB side to make sure the group exchange id matches the clients group exchange. There's then another filter once the payload is received to make sure the giver_id matches the authenticated users id, this way it's not showing everyone else's gift suggestions in the group.

Also, if the user navigates away from the gift exchange page, the channel closes. If they come back, the useEffect runs again and opens a new one. But while they're on the page the channel stays open regardless of exchange status. It's listening for inserts even when the exchange is pending or completed, where it's not needed. It would only be useful during that brief window when the exchange just became active and suggestions are still being generated.

## Other Technical details

The `await Promise.allSettled()` on line 101 of `drawGiftExchange.ts` doesn't hold the thread while waiting for all (i.e. 5 for example) gift suggestions to complete. It suspends the caller, `drawGiftExchange`, and the thread handles whatever else comes through the event loop — including processing the responses from those 5 calls as they come back one by one. The `await` keyword is what suspends the function, which means the remaining code in `drawGiftExchange` — updating the status to active — won't execute until all suggestion calls resolve. And since the `POST` handler is also awaiting `drawGiftExchange`, the HTTP response won't be sent until the entire function completes. Adding the `await` back to the `generateAndStoreSuggestions` part was done by Shashi and Alex _after_ I had pushed up the web socket code. Shashi also added the `Promise.allSettled()` part to wrap `generateAndStoreSuggestions`.

**Asynchronous** — each individual `generateAndStoreSuggestions` call is async. It awaits network calls internally and frees the thread each time.
**Concurrent** — multiple instances are in-flight at the same time because `assignments.map()` started them all before any of them finished.

So it's concurrent _and_ asynchronous. Those aren't mutually exclusive — the concurrency is actually built on the async behavior. Each call being async (freeing the thread at await points) is what makes it possible to run them concurrently on a single thread.

### Are the gift suggestions run in parallel?

It depends on which part you're talking about:

**The network I/O — yes, truly parallel.** The 5 OpenAI API requests are sent out and being processed by OpenAI's servers simultaneously. The 5 DB queries are running on Supabase's servers simultaneously. That work is happening on other machines with their own CPUs, so it's genuinely parallel.

**The JS code handling the responses — no, not parallel.** When OpenAI responds to call #3, the JS thread runs that callback. If call #1's response arrives at the same time, it waits in the event queue until the thread is done with #3. One piece of JS executes at a time.

So the full picture:

**Parallel:** the external I/O (OpenAI processing, Supabase queries)
**Concurrent but not parallel:** the JS code orchestrating it all (single thread, interleaved)
**Asynchronous:** the mechanism that makes both possible (freeing the thread at await points)
In practice, the bottleneck is OpenAI thinking for a few seconds, not the JS thread parsing the response. So it behaves effectively like parallel execution from the user's perspective — all 5 suggestions are being generated at the same time by OpenAI's servers. The single-threaded limitation barely matters here because the JS processing between awaits is trivial compared to the network wait time.

### Verbal explanation

Yeah so, a user experience improvement I worked on for this project involved the gift suggestions generation feature. When a drawing is initiated to randomize pairings of participants, we also generate 3 gift suggestions for the users match based on a profile that's filled out when someone signs up with the application. So when the drawing occurs, in order to see the gift suggestions the user previously had to refresh the page. The UX improvment idea was to eliminate the refresh and have the gift suggestions appear real-time as they get generated and written to the gift_suggestions table.

So we were using Supabase for our backend, and I researched this channel subscription feature, which is built on top of a web socket. And this let's us open a channel to a particular table in the database, have the page we want subscribe to the channel, and listen for INSERT events into the database. So as the suggestions get generated and written to the table, a payload gets sent through the channel to any subscriber, which in our case was a page that was listening, and receivies the payload, which then the client filters the payload to make sure the authenticated user ID matches gift giver id to make sure they're only being shown gifts for the individual they paired with and not other participants in the group.

What happens if a gift generation fails?

-   OpenAI is generating all 3 at once for a user and using a single insert(rows) call.

## SSR vs CSR

For an authenticated app like this, SSR is mainly a code organization benefit (simpler data fetching, smaller bundles) rather than a user-facing one. The one exception is your landing/marketing page, where SSR gives real SEO and performance advantages.

If you wanted to move incrementally, the approach would be: remove "use client" from page files, move data fetching into the server component, and push "use client" down into only the interactive child components (forms, buttons with click handlers, etc.).

The honest answer for this project: for an authenticated app like this with a relatively small number of pages and components, the bundle size difference from converting the dashboard to SSR would likely be small. The bigger practical win is the elimination of the loading spinner — users see content on first paint instead of waiting for the useEffect fetch cycle.

SSR optimization tends to matter most when you have large libraries that could stay server-side, many pages sharing heavy dependencies, or SEO/first-paint requirements. For this app, it's more of a code organization improvement than a performance one.

**Dashboard page server round trips**
Yes, that's the core difference for this dashboard page:

CSR (current)

Browser → server: "give me the dashboard page" → server sends HTML shell + JavaScript
Browser → server: useEffect fires, fetches /api/gift-exchanges → server queries Supabase → sends JSON back
The user sees a loading spinner between trip 1 and trip 2.

SSR

Browser → server: "give me the dashboard page" → server queries Supabase, renders HTML with data, sends it back
The user sees the finished page on the first response.

In both cases the browser makes an HTTP request to your Next.js server. The difference is whether the server does the data fetching work before responding (SSR) or tells the browser to do it after (CSR).
