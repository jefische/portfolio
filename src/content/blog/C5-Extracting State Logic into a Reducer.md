---
title: "React Concepts C5"
description: "Extracting State Logic into a Reducer"
pubDate: "July 24 2024"
heroImage: "/post_img.webp"
badge: "C5"
tags: ["rust","tokio"]
order: 3
---

Reducers are pure functions which help structure your components so that state logic is defined separately and can improve code readability in instances where state is changing and updating multiple times in a render. The more complex a components state is, the more likely a reducer can help with code organization, readability, and debugging. With reducer functions it's also common to use switch statements rather than if/else statements. Reducers shouldn't mutate state either.

Conceptually at a high level reducers makes sense, but the implementation is complicated.

