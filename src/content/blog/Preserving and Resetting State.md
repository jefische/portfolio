---
title: "React Concepts"
description: "Preserving and Resetting State"
pubDate: "July 2024"
heroImage: "/post_img.webp"
badge: "Demo badge"
tags: ["rust","tokio"]
---

React remembers state based on where a component lies in the render tree. State does not live in the component but rather in React. So React sees <div> <p></p> </div> and will remember the tag rendering order.

Don't nest component definitions, or you'll reset state by accident. React uses a UI tree which is a mapping of components to preserve and remember state. If the tree structure change then state will reset at that position, including all subtrees. You can also use keys (like for rendering lists) to manage React state versus relying on the components position in the tree between renders.

