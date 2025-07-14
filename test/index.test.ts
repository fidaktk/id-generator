import { ObjectId, uuidv4, uuidv5, cuidId, slug } from '../src';

describe('index', () => {
  it('should export ObjectId', () => {
    expect(ObjectId).toBeDefined();
  });

  it('should export uuidv4', () => {
    expect(uuidv4).toBeDefined();
  });

  it('should export uuidv5', () => {
    expect(uuidv5).toBeDefined();
  });

  it('should export cuidId', () => {
    expect(cuidId).toBeDefined();
  });

  it('should export slug', () => {
    expect(slug).toBeDefined();
  });
});
