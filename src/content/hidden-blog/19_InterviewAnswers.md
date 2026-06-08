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

The practical purpose: Gift suggestions are generated asynchronously on the server (using OpenAI). Previously the user had to refresh the page continuously, until the all gift suggestions had finished populating in the database and the gift exchange status was updated to `active`. This WebSocket lets the UI update in **real-time** as each suggestion is inserted into the database, which is why the `WaitingForSuggestions` component shows a loading state when `giftSuggestions` is empty — suggestions stream in one by one via this channel.

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
