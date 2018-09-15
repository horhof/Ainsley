# Apipecto

Each line always describes a function or a method call in some way, either describing a call that will be made or something available for others to call.


```typescript
enum Direction {
  INPUT,
  OUTPUT,
}

enum Return {
  VOID,
  BOOLEAN,
  VALUE,
}

enum Type {
  MAP,
  SET,
}

interface Interface {
  selector: string;
  direction: Direction;
  return: Return;
  parameters: Parameter[];
}

interface Parameter {
  term: string;
  optional: boolean;
  container: boolean;
}
```

|  Property   | Type |        Values        |                              Meaning                              |
| ----------- | ---- | -------------------- | ----------------------------------------------------------------- |
| Direction   | Enum | Input, output        | A method an outsider uses or a use of something else by this unit |
| Return type | Enum | Void, boolean, value | Determines if a procedure, predicate, etc.                        |
| Parameters  | List |                      |                                                                   |