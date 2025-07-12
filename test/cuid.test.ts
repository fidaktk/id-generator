import { cuidId, slug } from '../src/cuid';

test('cuid2 has 24-character length', () => {
  expect(cuidId()).toHaveLength(24);
});

test('slug is short and URL-safe', () => {
  const s = slug();
  expect(typeof s).toBe('string');
  expect(s.length).toBeLessThanOrEqual(22);
});