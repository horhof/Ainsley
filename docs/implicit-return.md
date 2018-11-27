---
id: implicit-return
title: Implicit returns
---

If the descriptor for a method or lambda is itself a description of the term that is returned, then there's no need to repeat it.

For example, `getActiveConnections` returns a number term which would normally be described except that this method can only return the number of active connections, which is already described in the interface selector:

```typescript
calculateOverdueJobs(): number
```

* Calculate overdue jobs

If we used instead a single descriptor, we would have to more or less repeat the selector in the return value:

* Calculate overdue jobs / overdue jobs