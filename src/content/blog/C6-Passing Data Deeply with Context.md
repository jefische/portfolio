---
title: "React Concepts"
description: "Passing Data Deeply with Context"
pubDate: "July 26 2024"
heroImage: "/post_img.webp"
badge: "Demo badge"
tags: ["rust","tokio"]
---

Context allows sub-components to have some piece of state managed by a parent component without passing props down the UI tree. I suppose this code is less verbose and easier to read. It requires a new hook called useContext.

Multiple context within the same component does not override each other.

In general, if you need to pass data far down a UI tree to a component or sub-component multiple layers deep this means context could be useful. Some common examples are passing a visual theme down a tree, and how routers keep track of which link is active.

Prop drilling is when you are lifting up state through many layers or components. So to reiterate, you create a context in a separate file typically and export it. Then import that context in a component file along with the useContext hook. Wrap the parent component with the context provider and specify a value, then go down the tree to where the value needs to be used and call the useContext hook on the context you imported and save to a new variable. Then you can use the variable in the child component as needed.


The last tutorial in this section (C7) is on combining Reducers with Context and can really clean up your code so that when you're looking at a component you can easily focus on the components that it's rendering, and not all the state and props or data that is being managed to pass down the UI tree. This tutorial also introduces the concept of Custom Hooks, which allow you to write your own hooks with useContext. This is covered more in depth in tutorial section D8.