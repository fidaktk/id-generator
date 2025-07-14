import { getRandomBytes } from './crypto';
import { Buffer } from 'buffer';

const MACHINE_ID = getRandomBytes(3);


const PID = typeof process !== 'undefined' && typeof process.pid === 'number'
  ? process.pid % 0xffff
  : Math.floor(Math.random() * 0xffff);

function toBuffer(value: number, size: number): Buffer {
  const buf = Buffer.alloc(size);
  if (size === 4) {
    buf.writeUInt32BE(value, 0);
  } else if (size === 2) {
    buf.writeUInt16BE(value, 0);
  } else {
    for (let i = size - 1; i >= 0; i--) {
      buf[i] = value & 0xff;
      value >>= 8;
    }
  }
  return buf;
}

export class ObjectId {
  readonly id: Buffer;
  readonly _bsontype = 'ObjectId';
  private static counter = getRandomBytes(3);

  constructor(input?: string | Buffer | number | number[]) {
    if (!input) {
      this.id = ObjectId.generate();
    } else if (typeof input === 'string' && ObjectId.isValid(input)) {
      this.id = Buffer.from(input, 'hex');
    } else if (Buffer.isBuffer(input) && input.length === 12) {
      this.id = input;
    } else if (Array.isArray(input) && input.length === 12) {
      this.id = Buffer.from(input);
    } else if (typeof input === 'number') {
      this.id = ObjectId.generate(input);
    } else {
      throw new Error('Invalid ObjectId input');
    }
  }

  private static nextCounter(): Buffer {
    for (let i = 2; i >= 0; i--) {
      this.counter[i]++;
      if (this.counter[i] <= 0xff) break;
      this.counter[i] = 0;
    }
    return this.counter;
  }

  static generate(time?: number): Buffer {
    const timestamp = toBuffer(Math.floor((time ?? Date.now()) / 1000), 4);
    const pid = toBuffer(PID, 2);
    const inc = this.nextCounter();
    return Buffer.concat([timestamp, MACHINE_ID, pid, inc], 12);
  }

  static isValid(id: any): boolean {
    return (
      typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id)
    ) || (Buffer.isBuffer(id) && id.length === 12);
  }

  static createFromHexString(hex: string): ObjectId {
    if (!ObjectId.isValid(hex)) throw new Error('Invalid hex string');
    return new ObjectId(hex);
  }

  static createFromTime(time: number): ObjectId {
    return new ObjectId(ObjectId.generate(time * 1000));
  }

  toHexString(): string {
    return this.id.toString('hex');
  }

  equals(other: ObjectId): boolean {
    return this.id.equals(other.id);
  }

  getTimestamp(): Date {
    return new Date(this.id.readUInt32BE(0) * 1000);
  }

  toJSON(): string {
    return this.toHexString();
  }

  toString(): string {
    return this.toHexString();
  }
}