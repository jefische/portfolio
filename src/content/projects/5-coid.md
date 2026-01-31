---
title: "Central Oregon Irrigation District"
description: "Custom interal application rebuild with BlueChannel, Inc."
custom_link_label: ""
custom_link: ""
github_link: ""
updatedDate: "May 1 2024"
heroImage: "/COID.PNG"
badge: "BlueChannel, Inc."
imgBg: "#fff"
objectContain: true
tagsJS: ["Javascript"]
tagsCSS: ["Bootstrap"]
# order: 5
cssId: "COIDimage"
---

The Central Oregon Irrigation District (COID) is a state chartered organization that contracted with my employer, BlueChannel, to rebuild their water rights desktop application into a web based application. I was tasked with helping build the frontend prototype and coordinating with the client on feedback and desired functionality.

The prototype was broken out into roughly 40 modules representing each of the screens required.

Below is a snapshot of one of the application screens.

![](/COID_WINN_2.0.png)

Much of the challenge to this project was understanding how the current system populates data in each module and how that would translate to the new application. The modules I focused on were data intensive and required displaying information in tables and custom card formats. Using bootstrap classes, and html table elements I ensured consistency with layouts and proper display of data to align with the client's system requirements.

I spent a lot of time in the client's legacy desktop application, studying how each screen worked and what data was required to display in different sections of the application. This required documenting processes and requirments along the way that would be essential for the backend developers once the prototype was complete. For the prototype, I stubbed out inital interpretations of particular modules, hooking up some basic routing, modals, and toasts to make the prototype interactive and allow the client to see a functional example and provide feedback. The process took about 6 months of back and forth with the client to dial in the front end as best as possible.

During the prototyping process, I also drafted 20+ financial and water right reports in HTML/CSS for printing from within the application. As I was drafting the reports, this gave the client the opportunity to request changes to current reports, remove some reports all together, and add new reports.
