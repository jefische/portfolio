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

The practical purpose: Gift suggestions are generated concurrently on the server (using OpenAI) allowing gift generation to start for every participant in the group at the same time. This is just a feature of calling the `generateAndStoreSuggestions` inside of the array.map() function which starts all calls one after the other. `generateAndStoreSuggestions` is not awaited, and is therefore a fire and forget function that allows the API to continue updating the gift exchange status to `active` and then the server to return an HTTP response to the client. This allows the browser refresh via `location.reload()` and the page to render the `WaitingForSuggestions` component. Now previously, the user had to refresh the page continuously, until all gift suggestions had finished populating in the database. The WebSocket lets the UI update in **real-time** as each suggestion is inserted into the database, which allows the `WaitingForSuggestions` component to unmount as suggestions stream in one by one via this channel and the `giftSuggestions` array is populated.

Note that the channel listens for database INSERT events, and sends a payload for each new record added. We add a filter on the DB side to make sure the group exchange id matches clients group exchange. There's then another filter once the payload is received to make sure it matches the authenticated users id, this way it's not showing everyone else's gift suggestions in the group.

## Technical details

The `await Promise.allSettled()` on line 101 of `drawGiftExchange.ts` doesn't hold the thread while waiting for all, say 5 for example, gift suggestions to complete. It suspends `drawGiftExchange` and the thread handles whatever comes through the event loop — including processing the responses from those 5 calls as they come back one by one.

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
