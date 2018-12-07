---
id: method
title: Methods
---

Methods are actions that a unit can perform. They expose these actions as goals that other units want to achieve. Those other units call the method in order to achieve the goal.

The basic representation of a methods comprises its identifying *descriptor*, the input data sent as *parameters*, and the output data received as *returns*.

## Descriptor

Methods are distinguished from one another by their name, called a *descriptor*.

## Parameters

Parameters are introduced by a prefix. Items within the list have a separator between them. Single parameters will have no separator. Methods without parameters will have no prefix and will continue on to any returns.

```typescript
resetUsersByAge(minAge: number, maxAge: number): void
```

> Reset users by age: min, max.

## Returns

Returns are separated from the parameters by a prefix. If the language permits multiple return values, then returns are separated the same as parameters. See also [implicit returns](implicit-return.md).

```
findOldestRecord(): number
```

> Find oldest record / age