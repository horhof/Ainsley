# Ainsley

## Grammar

```ebnf
interface ::= (property | method)

property ::= selector "?"?

method ::= selector "?"? (":" term-list ("." | "=" term))?

lambda ::= "{" (selector "?"? | (":" term-list) | (":" term-list)? "=" term) "}"

selector ::= word+

term ::= (sync-data | async-data | lambda)

term-list ::= term ("," term)*

sync-data ::= word+

async-data ::= "<" word+ ">"
```

## Overview

### Interface

Each line is a separate interface, each interface either a property, procedure, or function.

![interface](interface.png)

### Property

![property](property.png)

### Procedure

![procedure](procedure.png)

### Function

![function](function.png)

### Parameter list

![parameter-list](parameter-list.png)

### Lambda

![lambda](lambda.png)

### Async

![async](async.png)

### Selector

![selector](selector2.png)

### Term

![term](term.png)
