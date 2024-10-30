---
title: "React Concepts D2"
description: "Manipulating the DOM with Refs"
pubDate: "July 29 2024"
heroImage: "/post_img.webp"
badge: "D2"
tags: ["rust","tokio"]
order: 6
---

DOM manipulation is the most common use case for refs. You can store element nodes from the DOM into a useRef in the JSX tag definition like so:

const myRef = useRef(null);

<div ref={myRef}>
	...
</div>

With the node reference saved under myRef.current, you can then call any browser API you desire on this object such as focus() scrollIntoView(), etc.