---
id: boolean
title: Booleans
---

Terms which are boolean values are called *switches*. Methods which return a boolean value are called *predicates*.

## Switch

```typescript
resetServer(wipeTables: boolean): void
```

The table assumes that the style for a procedure is a trailing period.

|         Style | Example                               |
| ------------: | :------------------------------------ |
| Question mark | Reset server: wipe tables?.           |
| Parenthesized | Reset server: (wipe tables).          |
|          Dash | Reset server: -wipe tables.           |
|          Plus | Reset server: +wipe tables.           |
|          Word | **Reset server: should wipe tables.** |
|          None | **Reset server: wipe tables.**        |

## Predicate

A suffix style would be advantageous so that the interface list doesn't have to prefix predicates.

A prefix style would be better because it doesn't conflict with parameter lists that would follow.

```typescript
isNetworkSimulated(): boolean
```

|         Style | Example                          |
| ------------: | :------------------------------- |
| Question mark | Is network simulated?            |