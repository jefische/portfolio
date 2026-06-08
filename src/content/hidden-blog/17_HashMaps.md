---
title: "Why Hashmaps are fast"
description: "What makes a hashmap so quick for lookups?"
pubDate: "Feb 14 2026"
heroImage: "/post_img.webp"
badge: "Professional Development"
tags: ["Essay"]
order: 17
---

We treat HashMap hashing as if it’s random. But is it? What happens if we compare Java’s actual bucket distribution to the theoretical Poisson model?

Data Structures and Algorithms?

StringBuilder and string immutability?

I like writing about math problems a bit more, and data. I can spend much longer stretches of time focusing on a statistics problem.

That said, I am jumping from technology to technology. This world of AI and fast past changes in tech and tooling, is difficult to navigate and keep perspective. With so much change happening in short amounts of time, how does one filter for important information? How can one even determine what is important with so much uncertainty on whether or not AGI is on the horizon?

Maybe try LC in the morning or afternoon, and blogging/writing at the library at night?

If I workout during the afternoon I feel a bit tired but I also didn't get full sleep last night.

TO DO in a day:

Bluechannel work
GIS work
LC practice
Blog article on hashmaps
tennis db java project
apply to jobs
maybe do a MWF and TTH schedule for some items.

everyday I should do...LC practice

GIS work, apply to jobs TTH
BC work, hashmaps blog, tennis db site MWF

JWT Tokens are used for authentication and are not meant to hide content but rather check if the token was tampered with at all. So you should never include a password in a token payload.

If a token is tampered with, such as someone changes the role in the payload json from user to admin, then re-encodes the token using the base64URL encoding the request will be rejected. This is because when the server receives the request and token, it reconstructs the signature based on the received encoded header + payload and compares this against the signature in the request. The signature in the request will be the old signature and not match what the server generated causing the rejection. So nothing like a session actually needs to be stored in the DB. The token can be verified on the fly each time using the secret key since the signature is recreated on each request.

The signature is essentially base64url(header) + "." + base64url(payload). This string is then run through a hashing algorithm (e.g. HMAC-SHA256) using a secret key only the server knows. The JWT Secret Key is mixed into the hashing algo process twice which makes it basically impossible to reproduce.
