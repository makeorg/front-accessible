import * as helpers from './sequence';

describe('sequence Helper', () => {
  it('getPosition without currentIndex', () => {
    const position = helpers.getPosition();
    expect(position).to.equal(0);
  });

  it('getPosition without Index or currentIndex', () => {
    const position = helpers.getPosition(5);
    expect(position).to.equal(0);
  });

  it('getPosition with Index & currentIndex', () => {
    const position = helpers.getPosition(5,1);
    expect(position).to.equal(8);
  });

  it('getZIndex without Index & currentIndex', () => {
    const zindex = helpers.getZIndex();
    expect(zindex).to.equal(0);
  });

  it('getZIndex without Index or currentIndex', () => {
    const zindex = helpers.getZIndex(10);
    expect(zindex).to.equal(0);
  });

  it('getZIndex with Index & currentIndex', () => {
    const zindex = helpers.getZIndex(7,1);
    expect(zindex).to.equal(44);
  });

  it('getScale without Index & currentIndex', () => {
    const scale = helpers.getScale();
    expect(scale).to.equal(0);
  });

  it('getScale without Index or currentIndex', () => {
    const scale = helpers.getScale(10);
    expect(scale).to.equal(0);
  });

  it('getScale with Index & currentIndex', () => {
    const scale = helpers.getScale(400,100);
    expect(scale).to.equal(-3);
  });

  it('gaugeProgress without Index & currentIndex', () => {
    const scale = helpers.gaugeProgress();
    expect(scale).to.equal(0);
  });

  it('gaugeProgress without Index or currentIndex', () => {
    const scale = helpers.gaugeProgress(10);
    expect(scale).to.equal(0);
  });

  it('gaugeProgress with Index & currentIndex', () => {
    const scale = helpers.gaugeProgress(3,12);
    expect(scale).to.equal(25);
  });

  it('gaugeRemain without Index & currentIndex', () => {
    const scale = helpers.gaugeRemain();
    expect(scale).to.equal(0);
  });

  it('gaugeRemain without Index or currentIndex', () => {
    const scale = helpers.gaugeRemain(10);
    expect(scale).to.equal(0);
  });

  it('gaugeRemain with Index & currentIndex', () => {
    const scale = helpers.gaugeRemain(3,12);
    expect(scale).to.equal(75);
  });
});
