import { baseURL } from './axios';

describe('axios', () => {
  it('should have the correct baseURL', () => {
    expect(baseURL).toBe('http://localhost:4000/api/');
  });
});