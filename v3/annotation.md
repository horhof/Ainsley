---
id: annotation
title: Annotations
---

Both [methods](method.md) and [terms of data](term.md) can be *annotated* in order to represent their specific features, which means the normal representation is modified. For example, a feature of a term is that it may be optional and an optional term is represented in Apipecto differently than one which is mandatory.

Annotation is achieved by either prefixing, suffixing, or surrounding the term / method with symbols, or by modifying its descriptor.

## Features

Note that the example styles typically return void but there is no specific annotation in the examples to represent this, because it is its own annotation.

* Primitive types
  * [Void](void.md) (*optional* for terms and *procedure* for methods which return it)
  * [Boolean](boolean.md) (*switch* for terms and *predicate* for methods which return one)
* Higher-level data structures or types
  * [List](list.md)
  * [Set](set.md)
  * [Association](association.md)
  * [Lambda](lambda.md)
* Behavioral features of methods
  * [Implicit return](implicit-returns.md)
  * Implicit parameters?
  * Read-only vs. performs I/O