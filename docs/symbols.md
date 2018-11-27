---
id: symbols
title: List of symbols
---

## `x, y`

* Separates terms in parameters (and multiple returns if the language supports it).
* This is either a parameter or return list with members `x` and `y`.

## `x + y`

* Infix between members of a [set](set.md).
* This is a map whose constituent members are `x` and `y`.

## `x -- y`

* Infix between members of a [map](map.md).
* This is a map with keys `x` corresponding to values `y`.

## `x?`

* Suffix for boolean [terms](term.md).
* Descriptor suffix for predicates.

## `x.`

* Interface suffix for procedures.
* `x` is a procedure with a void return.

## `x*`

* Suffix for optional terms or methods whose return is optional.
* `x` is an optional term or a method whose return value is optional.

## `/ x`

* Prefix for returns list.
* `x` is a return value.

## `: x, y`

* Prefix for a parameters list.
* `x` and `y` are parameters.

## `[x]`

* Surrounds a list of terms `x`.

## `(x)`

* Surrounds asynchronous terms or method descriptors.
* `x` is delivered asynchronously or `x` is a method whose asynchronous return value is in the descriptor.

## `!`

* Method selector suffix for done lambdas.