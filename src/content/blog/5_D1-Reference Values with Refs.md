---
title: "React Concepts D1"
description: "Referencing Values with Refs"
pubDate: "July 29 2024"
heroImage: "/post_img.webp"
badge: "D1"
tags: ["rust", "tokio"]
order: 5
---

Refs are somewhat similar to state in that they can keep track of data between renders of components, however they don't trigger a rerender when updated and do not require a setter function to change the value. If you are displaying data somewhere in the component then best to go with state variables, otherwise Refs are good for just keeping track of something.

Refs take a single argument and return an object with a single value which is the Refs current value (i.e. Ref is a plain JS object with a single property called current). The values for Refs are mutable. Refs are considered an escape hatch meaning they're best used to access external systems outside of React such as browser APIs.

The most common use case for a ref is to access a DOM element.

Don't read or write ref.current during renderings. This makes your component hard to predict.

State works like a snapshot, so you can't read the latest state from an asynchronous operation like timeout. So in a case like that, you can use state for rendering and ref to read the most current state value in a timeout function call.
