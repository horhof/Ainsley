# Terms

```bnf
term ::= sync-data | async-data | lambda
```

![](diagrams/term.svg)

```bnf
term-list ::= (term | '[' term ']') (',' (term | '[' term ']'))*
```

![](diagrams/term-list.svg)

Terms are descriptions of data (or code being used as data).