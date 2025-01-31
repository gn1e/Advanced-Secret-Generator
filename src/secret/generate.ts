import { base58 } from '../encode/base58';
import { hash } from '../utils/hash';
import type { Encoding } from '../utils/types';

const LENGTH = parseInt(Bun.env.LENGTH || '64', 10);
const ENCODING = (Bun.env.ENCODING as Encoding) || 'base64';

export async function gensecret(
  length: number = LENGTH,
  encoding: Encoding = ENCODING,
  passphrase?: string
): Promise<string> {
  const randomBuffer = new Uint8Array(length);
  crypto.getRandomValues(randomBuffer);

  let secret: string;
  switch (encoding) {
    case 'hex':
      secret = Buffer.from(randomBuffer).toString('hex');
      break;
    case 'base58':
      secret = base58(randomBuffer);
      break;
    case 'base64':
    default:
      secret = Buffer.from(randomBuffer).toString('base64url');
      break;
  }

  return passphrase ? await hash(secret, passphrase) : secret;
}