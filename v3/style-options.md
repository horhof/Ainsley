---
id: ssl-example
title: SSL keychain
---

```typescript
generatePrivateKey(strength?: number): string
installCert(certText: string): Error | undefined
restartWebserver(): void
requestCsr(details: CertRequest, ev: boolean): string
isSslEnabled(): boolean
getHashes(): string[]
listen({ hostname: string, port: number }): boolean
```

## A

* Generate private key: strength - MD5 hash
* Install certificate: text - Error
* Restart webserver.
* Request CSR: details, EV? - CSR text
* Is SSL enabled?
* [Get hashes]
* Listen?: (hostname, port)

## B

* Generate private key: [strength] (MD5 hash)
* Install certificate: text ([Error])
* Restart webserver.
* Request CSR: details, EV? (CSR text)
* Is SSL enabled?
* Get hashes (MD5sums)
* Listen?: hostname, port

## C

* Generate private key - strength? -- MD5 hash
* Install certificate: text -- Error?
* Restart webserver!
* Request CSR: details, use EV - CSR text
* Is SSL enabled?
* Get hashes - [MD5sum]
* Listen?: (hostname, port)

## D

* Generate private key / strength? - MD5 hash
* Install certificate / text - Error?
* Restart webserver!
* Request CSR / details, use EV - CSR text
* Is SSL enabled?
* Get hashes - [MD5sum]
* Listen? / (hostname, port)

## E

* Generate private key - strength? / MD5 hash
* Install certificate - text / Error?
* Restart webserver!
* Request CSR - details, use EV  / CSR text
* Is SSL enabled?
* Get hashes / [MD5sum]
* Listen? - (hostname, port)

## E

* Generate private key, strength? / MD5 hash
* Install certificate, text / Error?
* Restart webserver!
* Request CSR, details, use EV  / CSR text
* Is SSL enabled?
* Get hashes / [MD5sum]
* Listen?, (hostname, port)

## F

* Generate private key, _strength_ / MD5 hash
* Install certificate, text / _Error_
* Restart webserver!
* Request CSR, details, extended validation?  / CSR text
* Is SSL enabled?
* Get hashes / [MD5sum]
* Listen? - (hostname, port)

## G

* Generate private key: _strength_ -- MD5 hash
* Install certificate: text -- _Error_
* Restart webserver.
* Request CSR: details, extended validation?  -- CSR text
* Is SSL enabled?
* Get hashes -- [MD5sum]
* Listen? (hostname, port)

## G

* Generate private key: (strength) - MD5 hash
* Install certificate: text - (error)
* Restart webserver.
* Request CSR: details, extended validation?  - CSR text
* Is SSL enabled?
* Get hashes - [MD5sum]
* Listen?: hostname + port

## G

* Generate private key: (strength) / MD5 hash
* Install certificate: text / (error code)
* Restart webserver.
* Request CSR: details, extended validation?  / CSR text
* Is SSL enabled?
* Get hashes / [MD5sum]
* Listen?: hostname + port