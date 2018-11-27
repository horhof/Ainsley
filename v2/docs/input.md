---
id: input
title: Input interface
sidebar_label: Input
---

A unit's inputs either describe:

1. a property, which is a piece of state data in the unit which is publically accessible, or
2. a method, which is a goal this unit is capable of achieving on behalf of others.

Both properties and methods are [selectors](selectors.md) but they contain other information, such as a description of their types or return values, which combined with other information about how they're accessed.