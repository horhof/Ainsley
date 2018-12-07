---
id: future
title: Futures
---

A future is a container for a value that will be available at some future time.

## Term

```typescript
/**
 * Queue a PDF generation job for a report.
 *
 * @param report A promise for a report object.
 * @return An enum describing the state of the job after being added.
 */
queuePdfGeneration(report: Promise<Report>): JobResult
```

> Queue PDF generation: (report) / job result

## Implicit return

```typescript
restartWebserver(): Promise<void>
```

> (Restart webserver).