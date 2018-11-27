---
id: annotation
title: Annotations
---

Both [methods](method.md) and [terms of data](term.md) can be *annotated* in order to represent their specific features, which means the normal representation is modified. For example, a feature of a term is that it may be optional and an optional term is represented in Apipecto differently than one which is mandatory.

Annotation is achieved by either prefixing, suffixing, infixing, or surrounding the term / method with symbols, or by modifying its descriptor.

## Features

* Primitive types
  * [Void](void.md) (*optional* for terms and *procedure* for methods which return it)
  * [Boolean](boolean.md) (*switch* for terms and *predicate* for methods which return one)
  * [Lambda](lambda.md)
* Data structures
  * [List](list.md)
  * [Set](set.md)
  * [Map](map.md)
  * [Future](future.md)
* Behavioral features of methods
  * [Implicit return](implicit-return.md)