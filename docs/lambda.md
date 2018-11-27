---
id: lambda
title: Lambdas
---

Lambdas follow the same rules as [methods](method.md). They're just the same thing as a method, packaged in a particular format, and appearing in the place of [terms of data](term.md).


They have the same three parts a method except each of them is optional.

```
{stick: mellow, ladybug / act}
 ^^^^^    \      /        ^^^
Selector  Parameters      Return value
```

If only a single term is within the curly braces, it represents a parameter.

Descriptors are omitted except when there are no parameters nor return value. Only the following combinations represent useful patterns:

|   Name    | Descriptor? | Parameters? | Returns? |
| :-------: | :---------: | :---------: | :------: |
|   Block   |     Yes     |     No      |    No    |
|   Then    |     No      |     Yes     |    No    |
|  Getter   |     No      |     No      |   Yes    |
| Transform |     No      |     Yes     |   Yes    |

## Blocks

Block lambdas have no parameters and no return value.

Their purpose is to run a fixed set of statements without outside control or observation. This can be used for done callbacks where the statements mutate data in the original caller via closure and don't need parameters or return values.

Since there's nothing else to describe it, the selector is used with a postfix exclamation point.

```typescript
removeLockFile(done: () => void): void
registerAlarmHandler(onAlarm: () => void): number
```

* Remove lockfile: done!.
* Register alarm handler: on alarm! / handler ID

## Thens

Then lambdas accept parameters but return nothing, used for delivering values asynchronously. The descriptor and the return value are omitted.

```typescript
readFile(filename: string, done: (err?, data) => void): void
```

* Read file: filename, {error*, file contents}.

## Getters

Getters have no parameters but do have a return value. These must have a closure over some kind of state and use it for their return else they would be constant functions.

```typescript
castThankful(): { () => number }
```

* Cast thankful / {/ timestamp}

## Transforms

Transforms take both parameters and return values.

```typescript
liftIntoList(fn: Function): Function
```

* List into list: {before / after} / {before list / after list}