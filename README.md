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
