# Outputs

```bnf
outputs ::= word+ ':' selector (word+ ':' selector)*
```

![](diagrams/output.svg)

Outputs describe the outgoing method calls that its parent makes on other objects. Only the first level of calls is described.

```typescript
// <Delete user>: ID.
//   - Database: find user by ID.
//   - Fs: remove file.
public deleteUser(id: number): Promise<void> {
  this.database.findUserById(id)
    .then(user => user.delete())
    .then(user => fs.removeFile(user.logFile))
    .then((err) => {
      if (err)
        throw err;
      this.log(`User removed.`)
    })
}
```