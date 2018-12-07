---
id: ssl-example
title: SSL keychain
---

The SSL keychain is responsible for managing the PEM file on disk, generating the private key within, generating CSRs that will match that key, and adding or removing any signed certificates.

## Message API

### Is SSL enabled?

```typescript
public isSslEnabled(): boolean
```

* The method descriptor is annotated with a trailing `?` because it returns a boolean.

### Generate private key: strength* / MD5

```typescript
public generatePrivateKey(strength: number = 4096): string
```

* `strength` is an optional parameter.

### Generate CSR: details, EV? / CSR text

```typescript
public generateCsr(csrDetails: CsrDetails, extValidation: boolean): string
```

* `EV` is a boolean.

### Install certificate: text / error code*

```typescript
public installCert(certContents: string): OpenSslErrorCode | undefined
```

* The error code return value is is optional.

### [Certificate checksums]

```typescript
public getCertChecksums(): string[]
```

* The method begins with get, which is omitted.
* The return is implicit since it's in method descriptor.
* The return value is a list, so the method descriptor is annotated as a list.

### (Restart webserver).

```typescript
public restartWebserver(): Promise<void>
```

* The interface ends with a period, so it's a procedure.
* The method descriptor is surrounded by `( )` so its return resolves asynchronously.

### Listen?: hostname + port

```typescript
type HttpOptions = { hostname: string, port: number }
public listen(options: HttpOptions): Promise<boolean>
```