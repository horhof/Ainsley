---
id: future
title: Futures
---

A future is a container for a value that will be available at some future time.

## Future term

```typescript
queuePdfGeneration(reports: Promise<Report>[]): boolean
```

> Queue PDF generation: (report) / job result

## Implicit future return

```typescript
restartWebserver(): Promise<void>
```

> (Restart webserver).