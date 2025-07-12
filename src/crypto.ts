import { webcrypto as crypto } from 'node:crypto';
export const getRandomBytes = (length: number) => Buffer.from(crypto.getRandomValues(new Uint8Array(length)));