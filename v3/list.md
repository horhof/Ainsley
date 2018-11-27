---
id: list
title: Lists
---

A list contains many elements of the same type. It's assumed the elements are ordered by their position.

## List term

```typescript
resetRegions(zipCodes: ZipCode[]): void
```

* Reset regions: [ZIP code].

|               Style | Example                          |
| ------------------: | :------------------------------- |
| Surrounding bracket | **Reset regions: [ZIP code]**    |
|      Bracket suffix | Reset regions: ZIP code[]        |
|                Word | Reset regions: list of ZIP codes |
|       Pluralization | Reset regions: ZIP codes         |

## Implicit list return

```typescript
getBooksForAuthor(authorId: number): Book[]
```

* [Books for author] : author ID