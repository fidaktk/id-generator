import { ObjectID } from '../src/objectid';

test('generates valid ObjectID', () => {
  const id = new ObjectID();
  expect(id.toHexString()).toMatch(/^[0-9a-f]{24}$/);
  expect(ObjectID.isValid(id.toHexString())).toBe(true);
});

test('ObjectID equality', () => {
  const a = new ObjectID();
  const b = new ObjectID(a.toHexString());
  expect(a.equals(b)).toBe(true);
});

test('ObjectID timestamp', () => {
  const now = Math.floor(Date.now() / 1000);
  const id = new ObjectID();
  expect(Math.abs(id.getTimestamp().getTime() / 1000 - now)).toBeLessThan(5);
});
