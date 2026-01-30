---
title: "Revature - Week 2"
description: "Notes on Stack and Heap memory, casting, classes, and objects"
pubDate: "Jun 5 2025"
heroImage: "/post_img.webp"
badge: "Memory Allocation"
tags: ["react.js", "state management"]
order: 13
---

Stack and Heap Memory

    Variable references are stored in Stack Memory. New objects instantiated are stored in Heap Memory.

Garbage Collection

    Garbage collection is the process of removing objects from the heap which have no references to them.
    Java abstracts the details away from the developer by allowing the JVM to handle memory management itself.
    Garbage collection is run in the background by the JVM. There is no way we can explicitly force garbage collection to happen, but we can request garbage collection to be run through the use of one of the following:
    	System.gc()
    	Runtime.getRuntime().gc()
    	System.runFinalize()

Wrapper Classes

    Wrapper classes are classes that let you treat primitives as Objects.
    Boxing is the process of converting a primitive to its wrapper class.
    Java has a feature called autoboxing which will automatically convert primitives to wrapper classes implicitly.
    Unboxing is the reverse - converting a wrapper class to its primitive.
    Wrapper classes have static helper methods like .parseX() and .valueOf() for explicit primitive conversion.

    Primitive	Wrapper Class

    boolean		Boolean
    byte		Byte
    short		Short
    char		Character
    int			Integer
    long		Long
    float		Float
    double		Double

    Wrapper classes have static helper methods like .parseX() and .valueOf() for explicit primitive conversion.
    Wrapper classes are the like the Object form of a primitive.

Inheritance

Polymorphism - method overloading and method overriding

The special Object class, is the parent class of all objects in Java. There are several methods provided to all objects including the unique hashCode() values and equality using .equals() (which was new and a little confusing). Equals() is equivalent to == where we compare memory addresses.

OOP Encapsulation - hiding instance variables inside of classes using the private keyword/access modifier and using getter/setter methods to access and change them.
Controlling access to an objects internal state.

Abstraction - Hiding some implementation details to organize your code in a more efficient manner. Creating black box systems via Class methods and separate out implementation details into separate interfaces.
An abstract class is a class that is declared abstract — it may or may not include abstract methods. Abstract classes cannot be instantiated, but they can be subclassed.
An abstract class can have 0 or more abstract methods, but if a class has at least one abstract method then the whole class has to be abstract.
Why use an abstract class? The major reason is to provide a template for other classes to start from, via inheritance.

Interfaces - they are similar to abstract classes but where a class can only inherit one other class, a class can implement as many interfaces as needed. Abstract classes are for creating templates, and Interfaces are for creating behaviors for classes.

Lists - Interfaces which implement the Collections interface. Lists are ordered collections. They cannot be instantiated as an object alone, they require one of the subclasses such as ArrayList or LinkedList.

Integer.parseInt(str[0]) can be used to convert string representation of numbers (i.e. "31") to integers.
String.valueOf() can be used to convert integers into strings (i.e. from 31 to "31").

6/26/25

mySQL Notes:

Structured Query Language (SQL)

Data Definition Language (DDL) - CREATE, DROP, ALTER, RENAME, TRUNCATE, COMMENT
Data Modification Language (DML) - INSERT, UPDATE, DELETE

Data Control Language (DCL) - GRANT, REVOKE
Transaction Control Language (TCL) - COMMIT, ROLLBACK, SAVEPOINT

Data Query Language (DQL) - SELECT. The JOIN clause is part of the DQL.

JDBC - Java Database Connectivity is a low-level API used to write Java code that interacts with relational databases via SQL

7/2/25

Functional interfaces are interfaces with only one abstract method. They can be implemented using lambda expressions as well (like one line function definitions)
Lambda expressions are a concise way to represent an instance of a functional interface: (parameter list) -> expression.

7/29/25
Spring Framework simplifies Java programming by creating modular, scalable code through decoupling and dependency injection.

The Inversion of Control (IoC) container, represented by the Bean Factory and the Application Context, manages object creation and assembly behind the scenes.

The ApplicationContext extends the capabilities of the Bean Factory, providing infrastructure services,
dependency injection, and application configuration.

The decoupling through dependency injection simplifies maintenance, testing, and scalability of the application.

Applications are typically broken into a Web Layer, Service Layer, and Database Layer.

1/30/26
The spring framework handles creation of objects during startup and the application context is the are where these objects are stored? This is the IoC container. Yes, the application context/container/IoC container is a Java Object, which stores other objects/beans, and controls how they're created and wired. Also stores metadata about each bean.

A spring boot application contains the componentscan feature and will look for classes annotated with config, controller, service, bean, component, and maybe some others, then calls the appropriate constructor methods to instantiate them, handles dependency injection by instantiating the classes which are a parameter dependency, (contrustor based injection), which is a sort of nested and recurisive process. By default all beans are singletons so once instance is shard across the application. Verus prototype scopes create a new instance every time the bean is called.

On startup spring boot also handles your environment variables and application.properties setup.
