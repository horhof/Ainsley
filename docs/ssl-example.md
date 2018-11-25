---
id: ssl-example
title: SSL keychain API
sidebar_label: SSL keychain
---

## SSL enabled?

```typescript
public sslEnabled: boolean;
```

## Have certificate?

```typescript
public get haveCertificate(): boolean;
```

## &lt;Install certificate?>: encoded text

```typescript
public installCert(certText: string): Promise<boolean>;
```

## Request CSR: details = encoded text

```typescript
public requestCsr(details: CertRequest): string;
```

## &lt;Restart webserver>.

```typescript
public restartWebserver(): Promise<void>;
```