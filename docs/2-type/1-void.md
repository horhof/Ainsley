# Void

Terms which are void are called *optional.* Methods which always return void are called *procedures*.

## Optional term

This can be an optional parameter:

```typescript
generatePrivateKey(strength?: number): void
```

> Generate private key: strength*.

This can also be an optional return (which is not the same as the void return of a procedure):

```typescript
generateDistribution(samples: number[]): DistrDetails | undefined
```

> Generate distribution*: [sample]

## Procedure

When a method always returns void, the interface is annotated. Unlike [predicates](boolean.md) this annotation isn't part of the selector, but the entire interface.

Without the annotation to indicate a procedure, the interpretation would instead be an [implicit return](implicit-return.md) of whatever the [selector](selector.md) indicates.

```typescript
generatePrivateKey(): void
```

> Generate private key.