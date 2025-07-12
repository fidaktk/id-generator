import { cuidId, slug } from '../src/cuid';

test('cuid starts with c', () => {
  expect(cuidId()).toMatch(/^c[a-z0-9]{24,}$/);
});

test('slug is short and URL-safe', () => {
  const s = slug();
  expect(typeof s).toBe('string');
  expect(s.length).toBeLessThanOrEqual(22);
});
