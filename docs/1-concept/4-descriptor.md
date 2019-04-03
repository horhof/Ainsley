# Descriptor

Descriptors for methods can be annotated in order to specify features of the entire method. The rest of the method (it's parameters and returns) are left alone and the descriptors's annotation alone indicates the feature.

## Accuracy

Descriptors don’t have to match exactly the method or variable name if it would be obvious. For example, `cert` may have been used in the code to avoid being verbose, but it's obvious that `cert` means certificate and "cert" would look awkward in normal text:

```typescript
installCert(certText: string): ErrorCode | undefined
createHttpRequest(uri: string): Promise<HttpRequest>
```

> Install certificate: text / (error code)
>
> (Create HTTP request): URI

## Omissions

If the first word of a method is get or set, it can be omitted. Use only one entry in the interface for both.

```typescript
getPrivateKeyChecksum(): string;
```

> Private key checksum