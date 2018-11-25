---
id: interface
title: Interfaces
sidebar_label: General
---

Interfaces are a way for control of execution flow to move from one unit to another. 

Interfaces are either the methods or properties that a unit exposes as its API. Interfaces have a [descriptor](descriptor.md) that describes what it does and should more or less match the method or property name.

Data may pass into and / or out of the interface as a [term](term.md).

## Interface direction

|        Type         |              Meaning               |
| :-----------------: | ---------------------------------- |
|  [Input](input.md)  | Other callers enter into this unit |
| [Output](output.md) | This unit calls other units        |

## Return type

Input interfaces always describe function or method calls and the return type is the most fundamental distinction between them.

|  Type   |         Meaning         |
| :-----: | ----------------------- |
|  Value  | Delivers a value        |
|  Void   | Called to perform tasks |
| Boolean | Returns a boolean value |