---
title: "Custom Carousel Behavior"
description: "My efforts to address an open source issue for a carousel on the DSD Cohorts page"
pubDate: "Oct 7 2025"
heroImage: "/post_img.webp"
badge: "UI Development"
tags: ["Open Source Contribution"]
order: 14
---

## DSD Cohorts Page

The initial issue described on GitHub was that there is an additional carousel indicator button which should be removed from the UI. There are 6 cohort review cards, and only 5 indicators are required to scroll through all of the content.

However, on smaller viewports it makes sense to have 6 indicators for each of the 6 cards. Upon inspecting the current behavior on a mid-sized viewport such as 1040px, there is an issue where selecting the 5th indicator actually scrolls to the end to show the 6th card and part of the cutoff 5th card.

There are a few interesting things going on here. One, is that when an indicator is selected this is triggering the `scrollTo()` method from the `scrollToIndex` callback function to proceed to the new carousel scroll position calculated using the selected index. Immediately after the `scrollTo()` method is invoked, this triggers the scroll event listener, `handlescroll` on the carousel which fires repeatedly as the carousel is scrolling, triggering uncessary state updates to `currentIndex`. I think the `scrollToIndex` callback should operate independently of `handlescroll` and have added a separate scrollend event listener that will toggle a boolean value to identify if `scrollToIndex` is currently being executed. While in execution, `handlescroll` will simply return out of the function call.

The other interesting piece is that when a scroll position is reached, the CSS snapback property will then adjust the closest card to the snap position and center it. Because scrollLeft is aligning the carousels position to the left side of the container, the snap position will sometimes be closer to the index after the selected one (i.e. if index 1 is selected, the carousel will center on index 2 instead). To address this I changed the calculation of the scroll position to center the selected card. First locate the card center: `cardCenter = newIndex * (cardWidth + gap) + cardWidth / 2`. Then subtract off half the container width to get the desired scroll position: `scrollPosition = cardCenter - containerWidth / 2`.


