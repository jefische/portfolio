---
title: "Custom Carousel Behavior"
description: "My efforts to address an open source issue for a carousel on the DSD Cohorts page"
pubDate: "Oct 7 2025"
heroImage: "/post_img.webp"
badge: "UI Development"
tags: ["Open Source Contribution"]
order: 15
---

## DSD Cohorts Page

The initial issue described on GitHub was that there is an additional carousel indicator button which should be removed from the UI. There are 6 cohort review cards, and only 5 indicators are required to scroll through all of the content.

My initial thoughts are that, on smaller viewports it makes sense to have 6 indicators for each of the 6 cards. If that's agreeable, we could have the component conditionally render fewer indicator-dots based on screen size, or, we could also leave 6 indicators visible on all viewport sizes and adjust the carousel component so that each time an indicator is selected it centers the appropriate card, which is not the case currently for all cards. This would make use of all 6 indicators.

Regardless of the preferred approach, there are some other interesting behaviors going on here that are related and should be addressed.

One of the first things I notice on multiple screen sizes, such as 1775px, there is the issue of `scrollToIndex` and `handleScroll` trying to reach a `scrollLeft` position which is larger than the possible max-value, which misaligns the active indicator with the scroll position. To address this I think we could check if the scroll position is greater than a max-scroll-value, then update the currentIndex appropriately. Additionally, `scrollToIndex` actually produces the effect of updating the next indicator button and the `currentIndex` value, however because `handleScroll` triggers on any scroll, it fires repeatedly and resets `currentIndex` through additional unnecessary rerenders which can cause the active style to sometimes not update correctly.  This leads to the first problem and solution:

### Problem (1)
One, is that when an indicator is selected this is triggering the `scrollTo()` method from the `scrollToIndex` callback function to proceed to the new carousel scroll position calculated using the selected index. Immediately after the `scrollTo()` method is invoked, this triggers the scroll event listener, `handlescroll` on the carousel which fires repeatedly as the carousel is scrolling, triggering uncessary state updates to `currentIndex`. 

### Solution (1)
I think the `scrollToIndex` callback should operate independently of `handlescroll` and have added a separate scrollend event listener that will toggle a boolean value to identify if `scrollToIndex` is currently being executed. While in execution, `handlescroll` will simply return out of the function call.

Next, upon inspecting the current behavior on a mid-sized viewport such as 1040px, there is an issue where selecting the 5th indicator actually scrolls to the end to show the 6th card and part of the cutoff 5th card. This also happens consistently at smaller viewports to different indexes.  This leads to the second problem and solution:

### Problem (2)
When a scroll position is reached (i.e. scrollLeft), the CSS snapback property will then adjust the carousel to the closest snap position and center it. Because scrollLeft is aligning the carousels position to the left side of the container, the snap position will sometimes be closer to a different index than intended (i.e. if index 1 is selected, the carousel will center on index 2 instead). 

### Solution (2)
To address this I suggest changing the calculation of the scrollLeft position to center the selected card. First locate the card center: `cardCenter = newIndex * (cardWidth + gap) + cardWidth / 2`. Then subtract off half the container width to get the desired scrollLeft position: `scrollPosition = cardCenter - containerWidth / 2`.


