# Annotation

Both [methods](1-method.md) and [terms of data](3-term.md) can be *annotated* in order to represent their specific features, which means the normal representation is modified. For example, a feature of a term is that it may be optional and an optional term is represented in Apipecto differently than one which is mandatory.

Annotation is achieved by either prefixing, suffixing, infixing, or surrounding the term / method with symbols, or by modifying its descriptor.

## Features

* Types
  * [Void](../2-type/1-void.md) (*optional* for terms and *procedure* for methods which return it)
  * [Boolean](../2-type/2-boolean.md) (*switch* for terms and *predicate* for methods which return one)
  * [Lambda](../2-type/3-lambda.md)
* Data structures
  * [List](../3-data-structure/1-list.md)
  * [Set](../3-data-structure/2-set.md)
  * [Map](../3-data-structure/3-map.md)
  * [Future](f../3-data-structure/4-future.md)
* Behavioral features of methods
  * [Implicit return](../4-behavior/1-implicit-return.md)
  * [Throwing](../4-behavior/1-throw.md)
  * [Purity](../4-behavior/3-purity.md)