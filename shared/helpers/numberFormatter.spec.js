const { formatMillionToText } = require('./numberFormatter');

// @flow
describe('numberFormatter', () => {
  const number = 123456;
  it('formatMillionToText with count < 1 million', () => {
    expect(formatMillionToText(number, 'FR', 'fr')).toEqual(
      number.toLocaleString('FR', 'fr')
    );
  });

  it('formatMillionToText with count > 1 million', () => {
    expect(formatMillionToText(1234567, 'FR', 'fr')).toEqual(
      '1.2 common.million'
    );
  });
});
