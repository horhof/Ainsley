# Ainsley

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

![interface](interface.png)

![property](property.png)

![procedure](procedure.png)

![function](function.png)

![parameter-list](parameter-list.png)

![lambda](lambda.png)

![async](async.png)

![selector](selector.png)

![term](term.png)
