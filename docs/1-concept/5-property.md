# Property

Apipecto doesn't distinguish between properties and methods returning terms which are implicit or switches.

With [implicit returns](../4-behavior/1-implicit-return.md), there is no return term specified because the [descriptor](4-descriptor.md) of the method tells you what it is.

```typescript
public userCount: number        // Property.
public get userCount(): number  // Getter.
public userCount(): number      // Method.
```

> User count

With [switch terms](../2-type/2-boolean.md), the return value is similarly omitted because the selector has been modified to show the return type, so the same thing applies.

```typescript
public isNetworkSimulated: boolean        // Property.
public get isNetworkSimulated(): boolean  // Getter.
public isNetworkSimulated(): boolean      // Method.
```

> Is network simulated?