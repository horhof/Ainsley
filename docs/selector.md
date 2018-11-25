---
id: selector
title: Selector
---

Selectors are just a set of one or more words, such as "Reset", or "Delete file", or "Create HTTP request".

Both properties and methods are identified by selectors. The selector should match the words used in the property or method name but used spaced words rather than camel-casing.

```typescript
// Fetch file description: filename = descriptor
public fetchFileDescriptor(filename: string): string
```

Acronyms can be capitalized when they're not capitalized within the code. 

```typescript
// Create HTTP request: URI = request
public createHttpRequest(uri: string): HttpRequest
```

The selector terminates at EOL for properties.

```typescript
// Property name
public propertyName: string
```

It terminates at the first punctuation mark for methods (excluding the angle brackets used to represent asynchronous interfaces and curly braces used for lambdas).

```typescript
// Delete record: ID.
public deleteRecord(id: number): void

// Is record?
public isRecord(): boolean

// Create table?: definition, [skip if exists?]
public createTable(definition: TableDef, skipIfExists: boolean): boolean

// Get increment = number
public getIncrement(): number

// <Disconnect>.
public disconnect(): Promise<void>
```
