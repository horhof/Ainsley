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

<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
  <g transform="scale(0.778)">
    <circle cx="45" cy="45" r="45" style="stroke:none; fill:#FFCC00"></circle>
    <circle cx="45" cy="45" r="42" style="stroke:#332900; stroke-width:2px; fill:#FFCC00"></circle>
    <line x1="15" y1="15" x2="75" y2="75" stroke="#332900" style="stroke-width:9px;"></line>
    <line x1="15" y1="75" x2="75" y2="15" stroke="#332900" style="stroke-width:9px;"></line>
    <text x="7" y="54" style="font-size:26px; font-family:Arial, Sans-serif; font-weight:bold; fill: #332900">R</text>
    <text x="64" y="54" style="font-size:26px; font-family:Arial, Sans-serif; font-weight:bold; fill: #332900">R</text>
  </g>
</svg>
