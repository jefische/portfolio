---
title: "Minimax Algorithm"
description: "Better understand the minimax algorithm by visualizing the decision tree a computer player takes in a game of tic-tac-toe."
custom_link_label: "Live Site"
custom_link: "https://tic-tac-toe-jf.netlify.app/"
github_link: "https://github.com/jefische/Tic-Tac-Toe"
updatedDate: "March 29 2024"
heroImage: "/TTT_tree_13_v2.png"
tagsJS: ["Javascript"]
tagsCSS: ["SCSS"]
order: 5
cssId: "TTTimage"
---

This is a custom built tic-tac-toe web application. The application has options to play against a computer that makes random moves, or against an intelligent computer player which implements the well known minimax algorithm. If choosing to play against the intelligent computer player, there is an added feature to view the minimax algorithm decision tree at certain points throughout the game. The decision tree is implemented using the [p5.js](https://p5js.org/) library.

Note that the tree is drawn and can be shown to the user when there are roughly 60 or fewer game states to generate (i.e. 60 or fewer calls to the minimax function). For sense of scale, when the game is started, if the intelligent computer player goes first, there are 549,945 calls to the minimax function. If the user goes first, this number drops down to 63,904 function calls as there are only 7 moves for the computer to consider. Once the number of available moves is 4 or less, visualization of the tree becomes more or less possible. Note there are some situations where with 4 moves left, 64 game states must be generated which does overcrowd the visual somewhat.

To see more details on how the decision tree is drawn please checkout the [wiki](https://github.com/jefische/Tic-Tac-Toe/wiki/Drawing-the-Decision-Tree) for this project on github.
