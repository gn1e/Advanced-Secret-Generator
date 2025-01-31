export async function hash(secret: string, passphrase: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(secret + passphrase);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    return Buffer.from(hashBuffer).toString('hex');
  }
  