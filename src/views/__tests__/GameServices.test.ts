import { parseSize } from '../GameServices.ts';

describe('parseSize', () => {
  it('parses valid size string', () => {
    const actual = parseSize('6x6');

    expect(actual).toEqual([6, 6]);
  });

  it('returns NaN for invalid size string', () => {
    const result = parseSize('invalidxsize');

    expect(result).toEqual([NaN, NaN]);
  });
});
