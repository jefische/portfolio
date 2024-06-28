---
title: "Central Oregon Irrigation District"
description: "Custom interal application rebuild with BlueChannel, Inc."
custom_link_label: ""
custom_link: ""
github_link: ""
updatedDate: "May 2024"
heroImage: "/COID.PNG"
tagsJS: ["PHP"]
tagsCSS: ["Bootstrap"]
---

The Central Oregon Irrigation District (COID) is a state chartered organization that contracted with my employer, BlueChannel, to rebuild their water rights desktop application into a web based application. Using a LAMP stack I was tasked with helping build the frontend prototype and coordinating with the client on feedback and desired functionality.

The prototype was broken out into roughly 40 modules representing each of the screens required. 

<!-- Below is a snapshot of one of the application screens. -->

<!-- ![](/COID_WINN_2.0.png) -->

Much of the challenge to this project was understanding how the current system populates data in each module and translating that to the new application. The modules I focused on were data intensive and required displaying information in tables and card formats. Using bootstrap classes, and html table elements I ensured consistency with layouts and proper display of data to align with COID's system requirements. 

I spent a lot of time in the old WINN system, studying how each screen worked and what data was required to display in different sections of the application. This required documenting processes and requirments along the way for future application development once the prototype was complete. I stubbed out inital passes of my interpretation of a particular module, hooking up some basic routing, modals, and toasts to make the prototype interactive and allow the client to see a functional example. 

I also drafted 20+ financial and water right reports in HTML/CSS for printing from within the web application.

