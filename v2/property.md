---
id: property
title: Properties
---

Apipecto doesn't draw a distinction between properties and methods returning terms which are implicit or switch.

With [implicit terms](implicit-term.md), there is no return term specified because the [selector](selector.md) of the method tells you what it is.

```typescript
// User count
public userCount: number        // Property.
public get userCount(): number  // Getter.
public userCount(): number      // Method.
```

With [switch terms](switch-term.md), the return value is similarly omitted because the selector has been modified to show the return type, so the same thing applies.

```typescript
// Is network simulated?
public isNetworkSimulated: boolean        // Property.
public get isNetworkSimulated(): boolean  // Getter.
public isNetworkSimulated(): boolean      // Method.
```

## Omitting `get`

Properties are usually not prefixed with `get`, neither are getters. If a method performs the same function as the property or getter, the `get` could be omitted even if style conventions require using it in the actual method name.

```typescript
// Active connections
public activeConnections: number        // Property.
public get activeConnections(): number  // Getter.
// Get active connections
public getActiveConnections(): number   // Method.
```