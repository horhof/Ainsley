---
id: set
title: Sets
---

A set is a fixed collection of values. It may or may not be ordered but its members can be identified either by an index key or their position within the data structure.

It can only be used as a term. It can't be used implicitly.

```typescript
type HttpOptions = { hostname: string, port: number }
fetch(uri: string, opts: HttpOptions): HttpRequest
```

> Fetch: URI, hostname + port / HTTP request