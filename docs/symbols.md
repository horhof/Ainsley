---
id: symbols
title: List of symbols
---

## Prefixes

###  Slash prefix `/ x`

A slash prefixes returns. E.g. a method returns a number representing age with `/ age`.

###  Colon prefix `: x, y`

A colon prefixes a parameters list. E.g. a method takes a min and max limit with `: min, max`.

## Infixes

###  Infix comma `x, y`

* Separates terms in parameters (and multiple returns if the language supports it).
* This is either a parameter or return list with members x and y.

###  Infix plus `x + y`

* Infix between members of a [set](set.md).
* This is a map whose constituent members are x and y.

###  Infix dashes `x -- y`

* Infix between members of a [map](map.md).
* This is a map with keys x corresponding to values y.

## Suffixes

###  Question mark suffix `x?`

* Suffix for boolean [terms](term.md).
* Descriptor suffix for predicates.

###  Period suffix `x.`

* Interface suffix for procedures.
* x is a procedure with a void return.

###  Asterisk suffix `x*`

* Suffix for optional terms or methods whose return is optional.
* x is an optional term or a method whose return value is optional.

###  Exclamation mark suffix `x!`

* Method selector suffix for done lambdas.

## Surrounds

###  Surrounding square brackets `[x]`

* Surrounds a [list](list.md) of terms x.

###  Surrounding parentheses `(x)`

* Surrounds asynchronous terms or method descriptors.
* x is delivered asynchronously or x is a method whose asynchronous return value is in the descriptor.