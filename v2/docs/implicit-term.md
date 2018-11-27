---
id: implicit-term
title: Implicit descriptor terms
sidebar_label: Implicit descriptors
---

If the selector for an interface or lambda is itself a description of the term, then there's no need to repeat it.

For example, `getActiveConnections` returns a number term which would normally be described except that this method can only return the number of active connections, which is already described in the interface selector:

```typescript
// Get active connections
public getActiveConnections(): number
```

If we used instead a single descriptor, we would have to more or less repeat the selector in the return value:

```typescript
// Get overdue jobs = count of overdue jobs
public getOverdueJobs(): number
```