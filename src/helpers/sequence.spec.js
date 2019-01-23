/* @flow */

import * as helpers from './sequence';

describe('Sequence Helper', () => {
  it('getPosition without currentIndex', () => {
    const position = helpers.getPosition();
    expect(position).toBeCloseTo(0, 0.001);
  });

  it('getPosition without Index or currentIndex', () => {
    const position = helpers.getPosition(5);
    expect(position).toBeCloseTo(10, 0.001);
  });

  it('getPosition with Index & currentIndex', () => {
    const position = helpers.getPosition(5, 1);
    expect(position).toBeCloseTo(8, 0.001);
  });

  it('getZIndex without Index & currentIndex', () => {
    const zindex = helpers.getZIndex();
    expect(zindex).toBeCloseTo(50, 0.001);
  });

  it('getZIndex without Index or currentIndex', () => {
    const zindex = helpers.getZIndex(10);
    expect(zindex).toBeCloseTo(40, 0.001);
  });

  it('getZIndex with Index & currentIndex', () => {
    const zindex = helpers.getZIndex(7, 1);
    expect(zindex).toBeCloseTo(44.00, 0.001);
  });

  it('getScale without Index & currentIndex', () => {
    const scale = helpers.getScale();
    expect(scale).toBeCloseTo(1, 0.001);
  });

  it('getScale without Index and with currentIndex', () => {
    const scale = helpers.getScale(10);
    expect(scale).toBeCloseTo(0.86, 0.01);
  });

  it('getScale with Index & currentIndex', () => {
    const scale = helpers.getScale(400, 100);
    expect(scale).toBe(-3);
  });

  it('gaugeProgress without Index & currentIndex', () => {
    const scale = helpers.gaugeProgress();
    expect(scale).toBe(0);
  });

  it('gaugeProgress without Index or currentIndex', () => {
    const scale = helpers.gaugeProgress(10);
    expect(scale).toBe(0);
  });

  it('gaugeProgress with Index & currentIndex', () => {
    const scale = helpers.gaugeProgress(3, 12);
    expect(scale).toBe(25);
  });

  it('gaugeRemain without Index & currentIndex', () => {
    const scale = helpers.gaugeRemain();
    expect(scale).toBe(0);
  });

  it('gaugeRemain without Index or currentIndex', () => {
    const scale = helpers.gaugeRemain(10);
    expect(scale).toBe(0);
  });

  it('gaugeRemain with Index & currentIndex', () => {
    const scale = helpers.gaugeRemain(3, 12);
    expect(scale).toBe(75);
  });
});
