---
id: term
title: Terms
sidebar_label: General
---

Term are pieces of data transiting an [interface](interface.md). When coming in, the terms are method parameters. When going out, the terms are [return](interface.md#return) values.

Multiple terms can be provided, separated by commas. Optional terms are surrounded by square brackets.

|    Item    |      Type       |                                       Meaning                                        |
| :--------: | :-------------: | ------------------------------------------------------------------------------------ |
| Descriptor |     String      | Describes what's in the term                                                         |
|    Type    | Descriptor type | How the descriptor applies to the data in the term                                   |
|  Optional  |     Boolean     | A term can be omitted from parameter lists or return values                          |
|  Wrapped   |     Boolean     | Whether the data is within a container that must be interacted with (e.g. a promise) |

## Term descriptors

The descriptor is a string that describes what kind of data is in the term.

The descriptor *type* categorizes the way that this string description applies to the term:

|                Type                |                            Meaning                             |
| :--------------------------------: | -------------------------------------------------------------- |
|      [Single](single-term.md)      | Describes a single thing, primitive or container               |
|      [Switch](switch-term.md)      | Describes a boolean condition                                  |
|    [Implicit](implicit-term.md)    | The data is already implied in an interface / lambda selector. |
|     [Members](members-term.md)     | Describes each member of a collection                          |
| [Association](association-term.md) | Describes the way that constituent parts are related           |

## Optional terms

Terms can be optional in parameter lists, such as `limit` here:

```typescript
// Fetch all users: [limit]
public fetchAllUsers(limit?: number)): User[]
```

Return terms can be optional, such as the `Author` type here:

```typescript
// Get author by ID: ID = [author]
public getAuthorById(id: number): Author | undefined
```