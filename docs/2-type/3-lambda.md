# Lambda

Lambdas follow the same rules as [methods](method.md). They're just a method appearing in the place of [terms of data](term.md). They generally have the same three parts a method:

```text
     {stick: mellow / acorn}
      `-+-'  `--+-'   `-+-'
        |       |       |
Descriptor  Parameters  Return
```

The main difference between lambdas and methods is that each of these three parts can be optional.

[Descriptors](descriptor.md) are omitted in all cases except when there are no parameters nor return value. For example, the following lambda takes a mellow parameter and returns acorn. Stick is omitted.

> {mellow / acorn}

The one case in which descriptives appear is a [block lambda](#blocks), which also removes the [curly brace surrounds](symbols.md#curly-brace-surround) and adds an [exclamation suffix](symbols.md#exclamation-suffix):

> {stick.}

If only a single term is within the curly braces, it represents the parameter of a [then lambda](#thens):

> {mellow}

Only the following combinations represent useful patterns:

|   Name    | Descriptor | Parameters | Returns |
| :-------: | :--------: | :--------: | :-----: |
|   Block   |    Yes     |     No     |   No    |
|   Then    |     No     |    Yes     |   No    |
| Transform |     No     |    Yes     |   Yes   |

The omitted combinations are one where the three parts are absent (which doesn't make sense) and three more where the descriptor is included alongside the other parts.

## Blocks

Block lambdas have no parameters and no return value.

Their purpose is to run a fixed set of statements without outside control or observation. This can be used for done callbacks where the statements mutate data in the original caller via closure and don't need parameters or return values.

Since there's nothing else to describe it, the selector is used with a postfix exclamation point.

```typescript
removeLockFile(done: () => void): void
registerAlarmHandler(onAlarm: () => void): number
```

> Remove lockfile: {done.}.
>
> Register alarm handler: {on alarm.} / handler ID

## Thens

Then lambdas accept parameters but return nothing, used for delivering values asynchronously. The descriptor and the return value are omitted.

```typescript
readFile(filename: string, done: (err?, data) => void): void
```

> Read file: filename, {error*, file contents}.

## Transforms

Transforms take both parameters and return values.

```typescript
liftIntoList(fn: Function): Function
```

> List into list: {before / after} / {before list / after list}