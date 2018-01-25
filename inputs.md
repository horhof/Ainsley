## Inputs

```bnf
interface ::= property | method outputs?
```

![](diagrams/input.svg)

A unit has one or more input interfaces, which are either properties or methods. If a method then a further list of [outputs](outputs.md) from that method may follow representing calls on other units.