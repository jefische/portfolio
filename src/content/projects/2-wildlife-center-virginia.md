---
title: "Wildlife Center of Virginia"
description: "Civic technology project to digitize hospital animal intake forms"
custom_link_label: "Live Site"
custom_link: "https://code-for-charlottesville.github.io/wildlife-form/"
github_link: ""
updatedDate: "October 30 2024"
badge: "Code for Charlottesville"
heroImage: "/header-wcv-badge.webp"
tagsJS: ["Javascript, Webpack"]
tagsCSS: ["Bootstrap"]
# order: 2
cssId: "WCVimage"
---

Code for Charlottesville partnered with Wild Virginia and the Wildlife Center of Virginia to develop a GIS StoryMap for visualizing wild animal vehicle collisions throughout central Virginia, and develop a web based animal intake form to more accurately capture collision locations. My contribution as a front-end developer was focused on helping to build the animal intake form.

A major focus of the animal intake form was to make the form replicable for other animal hospitals throughout the country. This meant using a tech stack that is simple to deploy and not require any funds (including hosting). Another priority was to implement an interactive map to allow for users to drop a pin and identify animal rescue locations. While the google maps api was considered, a credit card is needed for setup and there are limits to the number of free api requests.

To address these priorities our team opted for free hosting through GitHub pages, and a JavaScript mapping library, Leaflet. Leaflet implements the open source tile layering of Open Street Map. Additionally, Google Forms was used to store user form submissions, Bootstrap for much of the styling, and Webpack for bundling.

Below is a snapshot of the digital form.

![](/WCV-Form.png)
