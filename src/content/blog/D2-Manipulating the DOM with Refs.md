---
title: "React Concepts"
description: "Manipulating the DOM with Refs"
pubDate: "July 29 2024"
heroImage: "/post_img.webp"
badge: "Demo badge"
tags: ["rust","tokio"]
---

DOM manipulation is the most common use case for refs. You can store element nodes from the DOM into a useRef in the JSX tag definition like so:

const myRef = useRef(null);

<div ref={myRef}>
	...
</div>

