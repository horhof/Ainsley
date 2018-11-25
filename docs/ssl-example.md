---
id: ssl-example
title: SSL keychain
---

The SSL keychain is a unit responsible for managing the PEM file on disk, generating the private key within, and adding or removing any certificates applying to that key.

## API

### SSL enabled?

```typescript
public sslEnabled: boolean
```

### Have certificate?

```typescript
public get haveCertificate(): boolean
```

### &lt;Install certificate?>: encoded text

```typescript
public installCert(certText: string): Promise<boolean>
```

### Request CSR: details = encoded text

```typescript
public requestCsr(details: CertRequest): string
```

### &lt;Restart webserver>.

```typescript
public restartWebserver(): Promise<void>
```