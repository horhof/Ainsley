---
id: ssl-example
title: SSL keychain
---

The SSL keychain is responsible for managing the PEM file on disk, generating the private key within, generating CSRs that will match that key, and adding or removing any signed certificates.

## API

### Is SSL enabled?

```typescript
public isSslEnabled(): boolean;
```

### Generate private key: (strength) / MD5 hash

```typescript
public generatePrivateKey(strength: number = 4096): string;
```

### Generate CSR: details, EV? / CSR text

```typescript
public generateCsr(csrDetails: CsrDetails, extValidation: boolean): string;
```

### Install certificate: text / (error code)

```typescript
public installCert(certContents: string): OpenSslErrorCode | undefined;
```

### Get hashes / [MD5 sum]

```typescript
public getHashes(): string[];
```

### Restart webserver.

```typescript
public restartWebserver(): Promise<boolean>;
```

### Listen?: hostname + port

```typescript
type HttpOptions = { hostname: string, port: number };
public listen(options: HttpOptions): Promise<boolean>;
```