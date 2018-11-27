---
id: switch-term
title: Switch descriptor terms
sidebar_label: Switch descriptors
---

A term representing a boolean value is represented in a special way. It's so universally used that it's good to have a quick way of automatically knowing that something is a boolean.

The descriptor itself is modified with a question mark so it's obvious what it contains.

```typescript
// Reset server: wipe data? = return code
public resetServer(wipeData: boolean = false): number
```

This effect is similar to [predicates](predicates.md) where the [selector](selector.md) will be directly modified to say what the method returns.