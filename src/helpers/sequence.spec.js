import * as helpers from './sequence';

describe('sequence Helper', () => {
  it('getPosition without index', () => {
    const position = helpers.getPosition();
    expect(position).to.equal(0);
  });

  it('getPosition with index', () => {
    const position = helpers.getPosition(1);
    expect(position).to.equal(2);
  });

    it('getZIndex without index', () => {
      const zindex = helpers.getZIndex();
      expect(zindex).to.equal(0);
    });
      it('getZIndex with index', () => {
        const zindex = helpers.getZIndex(10);
        expect(zindex).to.equal(40);
      });
});
