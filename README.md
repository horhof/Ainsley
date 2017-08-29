# Ainsley

## Grammar

```ebnf
interface ::= (property | procedure | function)

property ::= selector

procedure ::= selector parameter-list? "."

function ::= selector parameter-list? "=" term

lambda ::= "{" (selector | parameter-list | parameter-list? "=" term) "}"

selector ::= word+ "?"?

async ::= "<" word+ ">"

parameter-list ::= ":" term ("," term)*

term ::= (word+ | lambda | async)
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
