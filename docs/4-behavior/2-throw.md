# Throwing

Should indicate in the interface that it can throw.

```typescript
public run(task: ITask): Promise<boolean[]> {
  if (!task) throw new Error(`Invalid inputs`)
  // ...
}
```

Options:

- ^Run: task / ([success])
- Run: task / ([success]) ^
- Run: task ^ ([success])
- Run^: task / ([success]) -– A second instance of the boolean ? suffix

A caret would be a good symbol for it, because it elevates something. Either tag the front or replace the return slash with it.

