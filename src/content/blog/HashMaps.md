---
title: "How random is Java's HashMap, really?"
description: "Comparing against the Poisson distribution with simulations"
pubDate: "April 2 2026"
heroImage: "/DSA.webp"
badge: "DSA"
objectCover: true
order: 1
---

We treat HashMap hashing as if it’s completely random, but is it? What happens if we compare Java’s actual bucket distribution to the theoretical Poisson model?

Using Java's rand.nextInt() method, I generated 100,000 random 32-bit integer keys and added them to a custom hashmap.
