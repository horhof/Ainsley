# Booleans

Booleans are specially represented by a trailing question mark in in selectors and terms.

## As terms

A parameter has a question mark at the end of the [term](terms.md).

```typescript
// Get constraints: table = list of constraints
getConstraints(tableName: string): Constraint[]

// Get table def: include indexes? = definition
getTableDef(includeIndexes): TableDef
```

## As a complete return value

A method returning a boolean has the entire [selector](selectors.md) trailed by a question mark.

```typescript
// Get tables = list of tables
getTables(): string[]

// Have tables?
haveTables(): boolean
```

If the method returns a value that contains a boolean, then the method isn't trailed by a question mark, but the term within the return value is.

```typescript
// Update table: query = ([error], records updated)
updateTable(query: string): { error?: Error, recordsUpdated: number }

// Have tables?
haveTables(): boolean
```