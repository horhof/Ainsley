---
id: term
title: Terms
---

Term are pieces of data transiting an [interface](interface.md). When coming in, the terms are method parameters. When going out, the terms are [return](interface.md#return) values.

Multiple terms can be provided, separated by commas. Optional terms are surrounded by square brackets.

|    Item    |      Type       |                           Meaning                           |
| :--------: | :-------------: | ----------------------------------------------------------- |
| Descriptor |     String      | Describes what's in the term                                |
|    Type    | Descriptor type | How the descriptor applies to the data in the term          |
|  Optional  |     Boolean     | A term can be omitted from parameter lists or return values |
|  Wrapped   |     Boolean     | Whether the data has a container (e.g. a promise)           |

## Term descriptors

The descriptor is a string that describes what kind of data is in the term.

The descriptor *type* categorizes the way that this string description applies to the term:

|    Type     |                            Meaning                             |
| :---------: | -------------------------------------------------------------- |
|   Single    | Describes a single thing, primitive or container               |
|   Switch    | Describes a boolean condition                                  |
|  Implicit   | The data is already implied in an interface / lambda selector. |
|   Members   | Describes each member of a collection                          |
| Association | Describes the way that constituent parts are related           |

### Single

The simplest form is when the descriptor just describes the term as a single thing, such as a record ID.

```typescript
// Delete book: record ID.
public deleteBook(recordId: number): void
```

### Switch

A term representing a boolean value is represented in a special way. It's so universally used that it's good to have a quick way of automatically knowing that something is a boolean.

```typescript
// Reset server: wipe data? = return code
public resetServer(wipeData?: boolean): number
```

### Implicit

If the selector for an interface or lambda is itself a description of the term, then there's no need to repeat it.

For example, `getActiveConnections` returns a number term which would normally be described except that this method can only return the number of active connections, which is already described in the interface selector:

```typescript
// Get active connections
public getActiveConnections(): number
```

If we used instead a single descriptor, we would have to more or less repeat the selector in the return value:

```typescript
// Get overdue jobs = count of overdue jobs
public getOverdueJobs(): number
```

### Members

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

### Association

A term can describe not an overall collection, or its individual members, but instead the *way* in which a maps keys and values are related, without saying anything about how many members are in the collection.

For example, the following interface will find the students in the given class that have failing grades and return them as a map of student IDs to the failing grade:

```typescript
// Get failing grades: class ID = student ID => grade percentage
public getFailingGrades(classId: number): { [studentId: number]: number }
```

## Optional terms