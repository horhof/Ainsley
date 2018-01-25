# Selectors

```bnf
selector ::= word+
```

![](diagrams/selector.svg)

Both properties and methods are identified by selectors. The selector must match what's in the code but is uses spaces rather than camel-casing. Acronyms can be capitalized when they're not capitalized within the code.

```typescript
// Fetch file description: filename = descriptor
public fetchFileDescriptor(filename: string): string

// Create HTTP request: URI = request
public createHttpRequest(uri: string): HttpRequest
```

The selector terminates at EOL for properties and at the first punctution mark for methods.

```typescript
// Property name
public propertyName: string

// Delete record: ID.
public deleteRecord(id: number): void

// Is record?
public isRecord(): boolean

// Get increment = number
public getIncrement(): number
```