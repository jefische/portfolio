---
title: "Javascript Concepts"
description: "Notes on promises, git and github."
pubDate: "July 8 2024"
heroImage: "/post_img.webp"
badge: "Javascript"
tags: ["rust","tokio"]
order: 8
---

7/8/24 - Promises

Promises are the foundation of asynchronous programming in modern Javascript.

A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

Git and Github: when using git init, this creates a new local repo. Then on github I can create a new repo and copy the URL to link them. To do so You run "git remote add origin <URL>". Note that origin can be named anything you want, but by convention origin is used. Then run "git pull origin main --allow-unrelated-histories" and if you generated with a README.md then you will need to handle the merge conflict if your local already has a README.md.  After the merge is handled you must run "git commit" and if the terminal pulls up a strange message to add a commit message, just type it anywhere without a hashmark. To exit this terminal wizard type ":" then "wq" enter. Now you can do "git push origin main" to push up your local files to the remote repo.

Alternatively don't initiate your github repo with a readme.md and the next screen will show you the steps to hook up the remote with your local repo.
