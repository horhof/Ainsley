# Ainsley

Ainsley is a system for describing programmatic interfaces in a non-technical, easy-to-understand way. The goal is to know at a glance how the unit is used.

A set of lines describing the unit can be added to the comment to succinctly summarize how a unit is used. Only the public interfaces for a unit are described.

## Example

```typescript
/**
 * The set of files representing an SSL certificate.
 *
 * API:
 * - SSL enabled?
 * - Have certificate?
 * - <Install certificate?>: encoded text
 * - Request CSR: organization details = encoded text
 * - <Restart webserver>.
 */
class SslKeychain {
  /** Should the webserver use SSL? */
  public sslEnabled: boolean

  private pemFile: string

  /** Is the certificate installed? */
  public get haveCertificate(): boolean {
    // Check if the certificate file is on disk and matches the
    // private key on disk.
  }

  /** Request a CSR from the internal private key. */
  public requestCsr(details: CertRequest): string {
    // Generate a certificate signing request (CSR) from the
    // provided details of the organization and return the ASCII-
    // armored CSR text for uploading to a certificate authority.
  }

  /**
   * Install a certificate.
   *
   * @return True if certificate was valid and the webserver came
   * up in HTTPS.
   */
  public installCert(certText: string): Promise<boolean> {
    // Write the certificate to a file, verify that it matches
    // the private key, and write HTTPS setting into webserver config.
  }

  /**
   * Signal the webserver to restart using whatever mode is
   * configured in its config file.
   */
  public restartWebserver(): Promise<void> {
    // ...
  }

  /** Generate a private key of the given size. */
  private generate(size: number): Promise<void> {
    // Eventually return once key is generated and saved to disk.
    // The key is private and its contents are not returned.
  }
}
```

