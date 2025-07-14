import { ObjectId } from '../src/ObjectId';
import { Buffer } from 'buffer';

describe('ObjectId', () => {
  it('should generate a valid ObjectId', () => {
    const id = new ObjectId();
    expect(id.toHexString()).toMatch(/^[0-9a-f]{24}$/);
    expect(ObjectId.isValid(id.toHexString())).toBe(true);
  });

  it('should be equal to another ObjectId with the same hex string', () => {
    const id1 = new ObjectId();
    const id2 = new ObjectId(id1.toHexString());
    expect(id1.equals(id2)).toBe(true);
  });

  it('should have a timestamp close to the current time', () => {
    const now = Math.floor(Date.now() / 1000);
    const id = new ObjectId();
    const idTimestamp = Math.floor(id.getTimestamp().getTime() / 1000);
    expect(Math.abs(idTimestamp - now)).toBeLessThanOrEqual(1);
  });

  it('should create an ObjectId from a hex string', () => {
    const hex = '60d5ec49e02d642e3e3e3e3e';
    const id = new ObjectId(hex);
    expect(id.toHexString()).toBe(hex);
  });

  it('should create an ObjectId from a Buffer', () => {
    const hex = '60d5ec49e02d642e3e3e3e3e';
    const buf = Buffer.from(hex, 'hex');
    const id = new ObjectId(buf);
    expect(id.toHexString()).toBe(hex);
  });

  it('should create an ObjectId from a number (timestamp in milliseconds)', () => {
    const timestampInMillis = 1624582657123;
    const id = new ObjectId(timestampInMillis);
    expect(id.getTimestamp().getTime()).toBe(Math.floor(timestampInMillis / 1000) * 1000);
  });

  it('should throw an error for invalid input', () => {
    expect(() => new ObjectId('invalid hex string')).toThrow('Invalid ObjectId input');
    expect(() => new ObjectId('gggggggggggggggggggggggg')).toThrow('Invalid ObjectId input');
    expect(() => new ObjectId('60d5ec49e02d642e3e3e3e3')).toThrow('Invalid ObjectId input'); // 23 chars
    expect(() => new ObjectId({} as any)).toThrow('Invalid ObjectId input');
  });

  describe('isValid', () => {
    it('should return true for a valid hex string', () => {
      const hex = '60d5ec49e02d642e3e3e3e3e';
      expect(ObjectId.isValid(hex)).toBe(true);
    });

    it('should return true for a valid Buffer', () => {
      const buf = Buffer.alloc(12);
      expect(ObjectId.isValid(buf)).toBe(true);
    });

    it('should return false for an invalid hex string', () => {
      expect(ObjectId.isValid('invalid hex string')).toBe(false);
      expect(ObjectId.isValid('gggggggggggggggggggggggg')).toBe(false);
      expect(ObjectId.isValid('60d5ec49e02d642e3e3e3e3')).toBe(false); // 23 chars
    });

    it('should return false for an invalid input type', () => {
      expect(ObjectId.isValid(123)).toBe(false);
      expect(ObjectId.isValid({})).toBe(false);
      expect(ObjectId.isValid(null)).toBe(false);
      expect(ObjectId.isValid(undefined)).toBe(false);
    });
  });

  describe('createFromHexString', () => {
    it('should create an ObjectId from a valid hex string', () => {
      const hex = '60d5ec49e02d642e3e3e3e3e';
      const id = ObjectId.createFromHexString(hex);
      expect(id.toHexString()).toBe(hex);
    });

    it('should throw an error for an invalid hex string', () => {
      expect(() => ObjectId.createFromHexString('invalid hex string')).toThrow('Invalid hex string');
    });
  });

  describe('createFromTime', () => {
    it('should create an ObjectId from a timestamp in seconds', () => {
      const timestampInSeconds = 1624582657;
      const id = ObjectId.createFromTime(timestampInSeconds);
      expect(id.getTimestamp().getTime()).toBe(timestampInSeconds * 1000);
    });
  });

  describe('toJSON and toString', () => {
    it('should return the hex string', () => {
      const hex = '60d5ec49e02d642e3e3e3e3e';
      const id = new ObjectId(hex);
      expect(id.toJSON()).toBe(hex);
      expect(id.toString()).toBe(hex);
    });
  });
});
