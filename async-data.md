# Async data

```bnf
async-data ::= '<' word+ '>'
```

![](diagrams/async-data.svg)

Asynchronous data are promises that eventually resolve to the indicated description.

```typescript
// Rigid umbrella: sore? = <user record>
public rigidUmbrella(sore: boolean): Promise<UserRecord>
```

They can be used as parameters although that's rare.

```typescript
// Cause utter: <announce>.
public causeUtter(announce: Promise<number>): void
```