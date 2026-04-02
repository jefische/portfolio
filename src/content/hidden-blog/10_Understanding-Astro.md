---
title: "Understanding Astro Post 1"
description: "Working with astro to organize content and create pages dynamically"
pubDate: "Sep 10 2022"
heroImage: "/post_img.webp"
tags: ["astro"]
order: 10
---

You can create entire sets of pages dynamically using .astro files that export a
getStaticPaths() function. This function returns an array of page routes where
each page will use the same template defined in the file.

Parameters (params) are passed to each route to define them (name them), and props are passed to make data from all desired content (i.e. posts) available to each page route.
