# Async predicates

![](diagrams/async-predicate.svg)

Asynchronous predicates promise to return a boolean.

```typescript
// <Arm fretful?>
public armFretful(): Promise<boolean>

// Arm fretful sync?
public armFretfulSync(): boolean
```

When parameters are used with async predicates, the parameters follow the brackets.

```typescript
// <Request soda?>: rapid
public requestSoda(rapid: string): Promise<boolean>
```