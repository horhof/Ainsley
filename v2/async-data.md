# Async data

![](diagrams/async-data.svg)

Asynchronous data are promises that eventually resolve to the indicated description. These are terms that are usually used as the return value for asynchronous functions.

```typescript
// Rigid umbrella: sore? = <user record>
public rigidUmbrella(sore: boolean): Promise<UserRecord>
```

They can be used as parameters or properties although that's rare.

```typescript
// Cause utter: <announce>.
public causeUtter(announce: Promise<number>): void

// <Is network simulated?>
public isNetworkSimulated: Promise<boolean>
```