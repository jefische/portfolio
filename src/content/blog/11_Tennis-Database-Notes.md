---
title: "Tennis Database Challenges"
description: "Notes on adding, deleting, and sorting Video cards while fetching data from MongoDB"
pubDate: "May 22 2025"
heroImage: "/post_img.webp"
badge: "State Management"
tags: ["react.js"]
order: 11
---

This blog post will address the process for fetching data from MongoDB, and passing the appropriate video data down as props to populate the sidebar filters, and the
video cards in the main content section. In development I also have a video adding form and a video delete button, which after each of these actions are completed the videos should re-sort as state updates will propogate through all nested components.

6/25/25

On initial load, I pull in all of the meta-data for the videos from MongoDB via useEffect and store the data inside a object, initFilters. I then pass this object down as props to the Sidebar component and feed this into a new state variable, formData, to populate the year and tournament filter components. Note, the new state variable is managed by Sidebar meaning the event handler for the checkboxes is in Sidebar.

The reason for formData is to keep the initial data loaded from MongoDB in a separate object, and not have it attached to a piece of React state. I don't know if that's necessary, we could probably have the state managed in the parent, Archive.jsx. Then pass the setData hook down as props to Sidebar and update the checkboxes that way. It seems cleaner to define the state in Sidebar though since that's the component that's using it.
