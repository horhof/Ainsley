---
id: term
title: Terms
sidebar_label: General
---

Term are pieces of data transiting an [interface](interface.md). When coming in, the terms are method parameters. When going out, the terms are [return](interface.md#return) values.

Multiple terms can be provided, separated by commas. Optional terms are surrounded by square brackets.

|    Item    |      Type       |                               Meaning                               |
| :--------: | :-------------: | ------------------------------------------------------------------- |
| Descriptor |     String      | Describes what's in the term                                        |
|    Type    | Descriptor type | How the descriptor applies to the data in the term                  |
|  Optional  |     Boolean     | A term can be omitted from parameter lists or return values         |
|  Indirect  |     Boolean     | The data must be indirectly accessed (e.g. a promise or a pointer ) |

## Term descriptors

The descriptor is a string that describes what kind of data is in the term.

The descriptor *type* categorizes the way that this string description applies to the term:

|                Type                |                            Meaning                             |
| :--------------------------------: | -------------------------------------------------------------- |
|    [Implicit](implicit-term.md)    | The data is already implied in an interface / lambda selector. |
|      [Single](single-term.md)      | Describes a single thing, primitive or container               |
|      [Switch](switch-term.md)      | Describes a boolean condition                                  |
|     [Members](members-term.md)     | Describes each member of a collection                          |
| [Association](association-term.md) | Describes the way that constituent parts are related           |

[Implicit terms](implicit-term.md) will simply not be mentioned; you rely on the [selector](selector.md). [Switch terms](switch-term.md) similarly omit any return value and rely on a modified selector.

[Single terms](single-term.md) will be mentioned as the bare descriptor. The other forms have extra syntax in addition to the descriptor.

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

## Indirect terms

The data is normally directly available to whatever receives the term, but if the term is indirect, it has to be further accessed to get at the data. In JavaScript, this can be data delivered asynchronously through a promise. In C, it could be data delivered through a pointer that has to be dereferenced.

```typescript
// Rigid umbrella: sore? = <user record>
public rigidUmbrella(sore: boolean): Promise<UserRecord>
```

They can be used as parameters although that's rare.

```typescript
// Cause utter: <announce>.
public causeUtter(announce: Promise<number>): void
```