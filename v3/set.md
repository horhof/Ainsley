---
id: set
title: Sets
---

A set is an unordered collection of values. It can only be used as a term. It can't be used implicitly.

```typescript
type HttpOptions = { hostname: string, port: number }
fetch(uri: string, opts: HttpOptions): HttpRequest
```

The table assumes that parameters are introduced by colons and returns by equals signs.

|            Style | Example                                     |
| ---------------: | :------------------------------------------ |
| Wrap parenthesis | Fetch: URI, (hostname, port) = HTTP request |
|    Separate plus | Fetch: URI, hostname + port = HTTP request  |

