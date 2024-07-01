---
title: "React Ideas"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
pubDate: "Jun 29 2024"
heroImage: "/post_img.webp"
badge: "Demo badge"
tags: ["rust","tokio"]
---

In React, component specific memory is called state. How a component remembers data or content that it is rendering.

App.js is my root component file. If using a framework like Next.js this has file-based routing where the
root component will be different for every page.

Some core rules and concepts to remember:
1 - React components are Javascript functions that you can sprinkle with markup. Components are essentially resuable UI elements for your app.
2 - Components automatically re-render whenever there is a change in their state or props. Props are the
single argument that React component functions accept (a props object).
3 - Local variables don't persist between renders.
4 - Changes to local variables won't trigger renders.
5 - Hooks are functions that give you access to React's internal memory and are only available during a render.
6 - Hooks allow you to retain data between renders with state variables, update state variables, and trigger React to render the component again using state setter functions.

On initial render, hooks are available such as setState(0). If such a hook is defined then the hook function will return an array with a state variable and state setter function. Then when say an event is fired it can call the state setter function which will cause a change in the components state and trigger another render. So then the hook becomes available again and React will remember that you changed the state variable to return the updated variable along with the setter function again.

3 steps - first trigger a render, render the component meaning react will call the function component whose state update triggered the render, then react commits changes to the DOM by using the appendChild() DOM API. React will apply the minimal necessary operations to make the DOM match the latest rendering output.

In my own words, there's an initial render that is processed when createRoot function is called, and the root element is rendered. This causes a chain reaction wherein all nested function components will also run and React will commit all changes to the DOM where after the brower will render the page to the user. Subsequent renders happen when say an event handler is fired and a setter function is run to update a state variable. This update to state triggers another render of that component and components nested inside it (though there are some efficiencies here where React will only update what's necessary). When the function component is run then any hooks become available which at that point React will remember the updated state and return the updated state variables accordingly along with the setter functions again. After the function has completed, React again commits changes to the DOM where needed (using appendChild), and the browser can render the new content to the user. This cycle goes on perpetually as long as the user is interacting with the page.

State as a snapshot sounds like function closure where state variables are set for each render independently and React remembers the variable value in memory at that time. When a state variable is changed, it will be updated for the next render, not the current one. Event handlers created in the past have the state values from the render in which they were created.

Queueing a Series of State Updates

queueing can be uncommon but good to understand.
batching - where React processes state updates after event handlers have finished running. When going through the processing React handles updates in the queue in the order received.
updater functions are added to the queue and can behave to update state multiple times within one render.

React does not batch across multiple intentional events like clicks - each click is handled separately. In the example however, with a setTimeOut function at 3 seconds, if the button is clicked two times quickly then the same state is used in both renders, so the buy will only register +1 and not +2. To register both buy actions we need to use an updater function.

Updating Objects in State

It is best to treat objects as immutable when using them with state. This means to create new copies of the object and triggering a render based on the copy. Mutating an object in state will not trigger a render. Checkout the Immer library for easier implementation of changing nested objects and keeping your code less verbose.