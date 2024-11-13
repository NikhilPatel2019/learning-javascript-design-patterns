# Learning JavaScript Design Patterns: A JavaScript and React Developer's Guide

This repository is a collection of examples demonstrating various design patterns in JavaScript. It focuses on the use of classes and modules to create organized and maintainable code. The project is structured into several chapters, each covering different concepts and implementations.

## Overview

This code is inspired by the book _Learning JavaScript Design Patterns_ by Addy Osmani. The examples provided in this repository align with the concepts discussed in the book, showcasing practical implementations of design patterns in JavaScript. 

For more details, you can visit the original repository: [Learning JavaScript Design Patterns](https://github.com/addyosmani/learning-jsdp).

### Chapters Overview

- **Chapter 5: Classes and Modules**
- **Chapter 7: Design Patterns**
  - **Creational Patterns**
    - **[Constructor Pattern](Chapter-7/I-Creational-Patterns/1-Constructor-Pattern/index.html)**
    - **[Module Pattern](Chapter-7/I-Creational-Patterns/2-Module-Pattern/index.html)**
    - **[Revealing Module Pattern](Chapter-7/I-Creational-Patterns/3-Revealing-Module-Pattern/index.html)**
  - **Structural Patterns** (Upcoming)
  - **Behavioral Patterns** (Upcoming)

## Chapter 5: Classes and Modules

In this chapter, we explore the use of classes in JavaScript, showcasing how to create and extend classes using inheritance. The chapter includes the following key topics:

1. **[Modules with Imports and Exports](Chapter-5/1-Modules-With-Imports-And-Exports):** Understanding how to structure code using modules for better organization and maintainability.
2. **[Module Objects](Chapter-5/5-Classes/cookie.js):** Exploring the properties and methods associated with module objects.
3. **Modules Loaded from Remote Sources:**
   - **[Static Imports](Chapter-5/3-Modules-Loaded-From-Remote-Sources/Dynamic-Imports/importOnInteraction_lodash.html):** Using static import statements to include modules.
   - **Dynamic Imports:**
     - **[Import on Interaction](Chapter-5/3-Modules-Loaded-From-Remote-Sources/Dynamic-Imports/importOnInteraction_lodash.html):** Loading modules dynamically based on user interactions.
     - **[Import on Visibility](Chapter-5/3-Modules-Loaded-From-Remote-Sources/Dynamic-Imports/importOnVisibility.html):** Using the Intersection Observer API to load modules when they come into view.
4. **[Modules for the Server](Chapter-5/4-Modules-For-The-Server/package.json):** Discussing how to configure and use modules in a server environment.
5. **[Classes with Constructors, Getters, and Setters](Chapter-5/5-Classes/cake.js):** Implementing classes with constructors and utilizing getters and setters for encapsulation.

This chapter emphasizes the importance of modular design and the benefits of using classes to encapsulate functionality in JavaScript applications.

## Chapter 7: Design Patterns

In this chapter, we explore various design patterns in JavaScript, categorized into Creational, Structural, and Behavioral patterns. Each section will provide insights into the respective patterns and their implementations.

### Creational Patterns

This section covers various creational design patterns that are essential for creating objects in a flexible and reusable manner. The chapter includes the following key topics:

1. **[Constructor Pattern](Chapter-7/I-Creational-Patterns/1-Constructor-Pattern/index.html):** This section covers the Constructor Pattern, which allows for the creation of multiple instances of an object with shared properties and methods.
   - **[Basic Constructor Example](Chapter-7/I-Creational-Patterns/1-Constructor-Pattern/2-BasicConstructor.js):** Demonstrates the use of constructors in JavaScript classes.
   - **[Constructor with Prototypes Example](Chapter-7/I-Creational-Patterns/1-Constructor-Pattern/3-ConstructorWithPrototypes.js):** Illustrates how to use prototypes with constructors to add methods to class instances.
   - **[Examples of Object Creation](Chapter-7/I-Creational-Patterns/1-Constructor-Pattern/1-ObjectCreation.js):** Provides various ways to create new objects in JavaScript, including object literals, `Object.create()`, and `new Object()`.

2. **[Module Pattern](Chapter-7/I-Creational-Patterns/2-Module-Pattern/index.html):** This section discusses the Module Pattern, which encapsulates private variables and methods while exposing a public API.
   - **[Module Pattern Variations](Chapter-7/I-Creational-Patterns/2-Module-Pattern/5-Module-Pattern-Variations/index.html):** Explores different variations of the Module Pattern, including the use of private methods and properties.
   - **[Shopping Basket Implementation](Chapter-7/I-Creational-Patterns/2-Module-Pattern/6-Module-Pattern-With-WeakMap/6.3-Shopping-Basket-Implementation.js):** Provides an implementation of a shopping basket using the Module Pattern with WeakMaps for private variables.

3. **[Revealing Module Pattern](Chapter-7/I-Creational-Patterns/3-Revealing-Module-Pattern/index.html):** This section focuses on the Revealing Module Pattern, a variation of the Module Pattern that exposes only the methods and properties intended to be public.

This section emphasizes the importance of creational patterns in managing object creation and ensuring code maintainability.

### Structural Patterns (Upcoming)

This section will cover various structural design patterns that focus on how objects and classes are composed to form larger structures. 

### Behavioral Patterns (Upcoming)

This section will explore behavioral design patterns that deal with object interaction and responsibility delegation.