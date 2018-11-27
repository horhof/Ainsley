---
id: members-term
title: Members descriptor terms
sidebar_label: Members descriptors
---

A single term can a collection which could be given a single name but sometimes it's better to describe each of its members instead.

For example, the following HTTP server options:

```typescript
type ListenOptions = { hostname: string, port: number, ssl: boolean }
public listen(opts: ListenOptions): void
```

--could either be gathered into one descriptor called options or broken apart into its members:

```typescript
// Listen: options.                 # Uses single term.
// Listen: (hostname, port, SSL?).  # Uses members term.
```