import { Buffer } from 'buffer';

export function getRandomBytes(length: number): Buffer {
  const buf = Buffer.alloc(length);
  crypto.getRandomValues(buf);
  return buf;
}