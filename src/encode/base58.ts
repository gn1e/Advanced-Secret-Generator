const abc = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export function base58(buffer: Uint8Array): string {
  let num = BigInt('0x' + Buffer.from(buffer).toString('hex'));
  let output = '';

  while (num > 0) {
    const remainder = Number(num % BigInt(58));
    num /= BigInt(58);
    output = abc[remainder] + output;
  }

  return output;
}
