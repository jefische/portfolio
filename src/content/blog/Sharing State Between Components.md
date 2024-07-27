---
title: "React Concepts"
description: "Sharing State Between Components"
pubDate: "July 2024"
heroImage: "/post_img.webp"
badge: "Demo badge"
tags: ["rust","tokio"]
---

Remove state from both components and move it to their closest common parent, then pass it down to them via props. This is known as lifting state up, and it's very common in React when coordinating two or more components.

For a child component to set the state of it's parent, the parent needs to explicitly allow the child to change it's state by passing down an event handler as a prop. This is part of lifting state up.

A controlled component is one in which the state is managed by the components parent, whereas uncontrolled a components state is local and not controlled by any other components. Uncontrolled components are easier to use as they require less configuration, but are less flexible if you want to coordinate them together with siblings or parents. Controlled components are maximally flexible but must be configured with props.

In the example challenges with the 3 components FilterableList (parent), SearchBar, and List we want to share the search query to the list so we must define the state in the parent to then pass the results of the search via props to List.

