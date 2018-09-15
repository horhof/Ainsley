# Apipecto

Each line always describes a function or a method call in some way, either describing a call that will be made or something available for others to call.

## Interface

```typescript
interface Interface {
  /** Describes what the interface does. */
  selector: string;
  /** Whether execution flows into this unit or this unit flows out to another. */
  direction: Direction;
  return: Return;
  returnTerm?: Term;
  parameters: Parameter[];
}
```

## Direction

```typescript
enum Direction {
  INPUT,
  OUTPUT,
}
```

Interfaces are either ways that control of execution can flow into a unit or how it can flow out to other units.

## Return type

Input interfaces always describe function or method calls and the return type is the most fundamental distinction between them.

```typescript
enum Return {
  VOID,
  BOOLEAN,
  VALUE,
}
```

## Terms

```typescript
interface Term {
  name: string;
  optional: boolean;
  contained: boolean;
  type: TermType;
}
```

```typescript
enum TermType {
  VALUE,
  MAP,
  SET,
}
```


----

|  Property   | Type |        Values        |                              Meaning                              |
| ----------- | ---- | -------------------- | ----------------------------------------------------------------- |
| Direction   | Enum | Input, output        | A method an outsider uses or a use of something else by this unit |
| Return type | Enum | Void, boolean, value | Determines if a procedure, predicate, etc.                        |
| Parameters  | List |                      |                                                                   |