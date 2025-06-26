---
title: "Tennis Database Notes"
description: "Notes on state and state management"
pubDate: "Jun 26 2025"
heroImage: "/post_img.webp"
badge: "State Management"
tags: ["react.js", "state management"]
order: 14
---

On initial load, I pull in all of the meta-data for the videos from MongoDB via useEffect and store the data inside a object, initFilters. I then pass this object down as props to the Sidebar component and feed this into a new state variable, formData, to populate the year and tournament filter components. Note, the new state variable is managed by Sidebar meaning the event handler for the checkboxes is in Sidebar.

The reason for formData is to keep the initial data loaded from MongoDB in a separate object, and not have it attached to a piece of React state. I don't know if that's necessary, we could probably have the state managed in the parent, Archive.jsx. Then pass the setData hook down as props to Sidebar and update the checkboxes that way. It seems cleaner to define the state in Sidebar though since that's the component that's using it.
