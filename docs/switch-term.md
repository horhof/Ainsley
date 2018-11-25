---
id: switch-term
title: Switch descriptor terms
sidebar_label: Switch descriptors
---

A term representing a boolean value is represented in a special way. It's so universally used that it's good to have a quick way of automatically knowing that something is a boolean.

```typescript
// Reset server: wipe data? = return code
public resetServer(wipeData: boolean = false): number
```