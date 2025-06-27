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

6/27/25

formData is an object of objects. To properly work with this data in jsx, Object.entries() and Object.fromEntries() are very useful. Object.entries() will return an array of arrays. Each element in the outer array will itself be an array of key, value pairs representing the object entries. Object.fromEntries() will convert an array into an object type.

Implementing the Select All feature for the Year filters was an insightful challenge. I had to move the event handler into the Year component from the parent Sidebar component. Then I added a simple if statement to check if any checkboxes have the included property set to false, which if that's the case then I call the state setter function to update the select all state to also be false.

Of course when Select All box is checked, I call setSelectAll inside this event handler AND I also have to call the state setter for the other years (setFormData). setFormData then has to convert the formData object into an array via Object.entries(), then call .map() and if the element is a Year (instead of a Tournament) I set the include boolean to the state value for Select All. Finally this is all wrapped in Object.fromEntries() to convert the array back into an object to be returned.

Currently implementing the Edit feature in development mode. I created a new EditVideoForm component which used the AddVideoForm component as a template. The code structure has the VideoCard component as the parent, then the EditModal is the direct child component, followed by the VideoEditForm child sub-component. I think I need to code-up 2 endpoints, one for grabbing the selected video meta data, and a second for updating the video meta data.
