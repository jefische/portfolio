---
title: "System Design Interviews"
description: "Exploring system design, client - server, and service to service problems"
pubDate: "Jan 21 2026"
heroImage: "/post_img.webp"
badge: "Professional Development"
tags: ["Essay"]
order: 16
---

Rabbit MQ?

mq (message queues) - rabbit m queue - can be priority queues (don't have the same replay, can give you guaranteed one time delivery) vs a topic (has replay, replay a notification, an hours worth of notifications)

queues by user, vs queues by events

how to partition queues.

messaging queues

`topics` are one publisher with multiple subscribers (each event to multiple subscribers)

notifications use queues?

service to service - no `topics`, `gRPC` with well defined api, don't need rest necessarily

`gRPC` (remote procedure call) - proto buffs, never done it before.

async calls,

public apis, don't controll both ends

`gRPC`, remote something

rest, rpc, queues, topics (server/service to server/service)

rest, graphql, sockets (client to server)

how to scale - read from queue can have multiple processes read from them (can scale horizontally in non-blocking way - important for big data systems)

when do you use relational store, doc store, big table, index, and cache (redis).
