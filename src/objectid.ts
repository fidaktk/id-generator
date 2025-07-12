import { randomBytes } from 'crypto';
import { Buffer } from 'buffer';

const MACHINE_ID = randomBytes(3);
let counter = randomBytes(3);

const PID = typeof process !== 'undefined' && typeof process.pid === 'number'
  ? process.pid % 0xffff
  : Math.floor(Math.random() * 0xffff);

function nextCounter(): Buffer {
  for (let i = 2; i >= 0; i--) {
    counter[i]++;
    if (counter[i] <= 0xff) break;
    counter[i] = 0;
  }
  return counter;
}

function toBuffer(value: number, size: number): Buffer {
  const buf = Buffer.alloc(size);
  for (let i = size - 1; i >= 0; i--) {
    buf[i] = value & 0xff;
    value >>= 8;
  }
  return buf;
}

export class ObjectID {
  readonly id: Buffer;
  readonly _bsontype = 'ObjectID';

  constructor(input?: string | Buffer | number | number[]) {
    if (!input) {
      this.id = ObjectID.generate();
    } else if (typeof input === 'string' && ObjectID.isValid(input)) {
      this.id = Buffer.from(input, 'hex');
    } else if (Buffer.isBuffer(input) && input.length === 12) {
      this.id = input;
    } else if (Array.isArray(input) && input.length === 12) {
      this.id = Buffer.from(input);
    } else if (typeof input === 'number') {
      this.id = ObjectID.generate(input);
    } else {
      throw new Error('Invalid ObjectID input');
    }
  }

  static generate(time?: number): Buffer {
    const timestamp = toBuffer(Math.floor((time ?? Date.now()) / 1000), 4);
    const pid = toBuffer(PID, 2);
    const inc = nextCounter();
    return Buffer.concat([timestamp, MACHINE_ID, pid, inc], 12);
  }

  static isValid(id: any): boolean {
    return (
      typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id)
    ) || (Buffer.isBuffer(id) && id.length === 12);
  }

  static createFromHexString(hex: string): ObjectID {
    if (!ObjectID.isValid(hex)) throw new Error('Invalid hex string');
    return new ObjectID(hex);
  }

  static createFromTime(time: number): ObjectID {
    return new ObjectID(ObjectID.generate(time));
  }

  toHexString(): string {
    return this.id.toString('hex');
  }

  equals(other: ObjectID): boolean {
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