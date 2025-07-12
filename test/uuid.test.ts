import { uuidv4, uuidv5 } from '../src/uuid';

test('uuidv4 format', () => {
  const id = uuidv4();
  expect(id).toMatch(/[a-f0-9\-]{36}/i);
});

test('uuidv5 deterministic output', () => {
  const id1 = uuidv5('example.com', '6ba7b810-9dad-11d1-80b4-00c04fd430c8');
  const id2 = uuidv5('example.com', '6ba7b810-9dad-11d1-80b4-00c04fd430c8');
  expect(id1).toBe(id2);
});
