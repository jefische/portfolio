---
title: "Revature Week 1"
description: "Notes on OS, threads, and processing"
pubDate: "Jun 3 2025"
heroImage: "/post_img.webp"
badge: "Operating Systems"
tags: ["react.js", "state management"]
order: 12
---

## OS Fundamentals

Threading is an interesting concept which is the flow of a programs execution. It includes a program's execution stack which is basically the ordered list of operations to execute next in a program. Threading also contains the current working variables, and execution history.

Scheduling is how the process manager manages CPU usage and which processes to load next into executable memory. Sharing the CPU is known as timme multiplexing.

Memory management is how an OS moves processes back and forth between main memory and disk during execution.

Java is a high-level, compiled, strongly typed object-oriented programming (OOP) language.
Java has 2 stages of compilation; first through an OS-independent compiler and second in a Java Virtual Machine (JVM) which is custom-built for every OS.
Source code compiled (encodes the source code) into a machine-independent encoding, known as bytecode.

Reading the Stack Trace
A stack trace is output detailing a method-call stack during a threads execution. Each item is a frame, which is a data structure related to method calls, detailing the execution. Each JVM thread (a path of execution) is associated with a stack that's created when the thread is created.

Throwable is the base class for exceptions and errors. It provides the printStackTrace method, used to print the class name, line number, and stack trace of erroneous code.

In Java, a static member is a member of a class that isn’t associated with an instance of a class. Instead, the member belongs to the class itself. As a result, you can access the static member without first creating a class instance.
The static keyword in Java is mainly used for memory management. Static variables are, essentially, global variables and can only be created at the class level.
