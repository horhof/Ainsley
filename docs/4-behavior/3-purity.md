# Purity

```typescript
public readSslCert(filename: string): Promise<ISslCert> {
  fs.readFile(filename, (err, data) => {
    // ...
  })
}
```

Options:

- ~(Read SSL cert): filename --— Prefix with ~
- Read SSL cert: filename ~ (cert)  --— Replace the / return.
- % (Read SSL cert): filename --— Prefix with %

Problem is stacking with the throw annotation.

- Read SSL cert: filename ~^ cert

Alternatively annotating purity vs. the lack of it.

- Does external I/O (and is naturally async)
- Reads mutable state (method reading a mutable class property)
- Pure, does no I/O and reads no global state

------

- Either the function mutates or it’s read-only.
- Either the function relies on mutable state or not.
- Either the function does external I/O or it’s internal to the program.
- Either the function has a constant return value or not.

Options:

1. Mutator
2. Read-only
3. Constant