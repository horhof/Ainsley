---
id: behavior
title: Behavior
---

Behaviors are things within a unit of code that perform some kind of I/O with some other unit in the system.

They are of two types:

1. An [interface](interface.md) is an action the unit [exposes](input.md) (or [uses](output.md)) in its API.
1. A [lambdas](lambda.md) is action passed around as a term into or from an interface.

## Properties

|  Property  |  Type   |                  Meaning                   |
| :--------: | :-----: | ------------------------------------------ |
| Descriptor | String  | Summarizes the behavior                    |
|   Inputs   | [Term]  | A parameter list of zero or more terms     |
|   Output   |  Term?  | Optional return value of one term          |
|    Pure    | Boolean | Whether the behavior triggers side-effects |