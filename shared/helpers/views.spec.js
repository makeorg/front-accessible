// @flow
import { sortSlotsBySmallest, swapIndexes } from './views';

const SlotsArray = [
  {
    slot: 4,
  },
  {
    slot: 2,
  },
  {
    slot: 3,
  },
  {
    slot: 1,
  },
];

const expectedSlotsArray = [
  SlotsArray[3],
  SlotsArray[1],
  SlotsArray[2],
  SlotsArray[0],
];

const expectedSwappedArray = [
  SlotsArray[3],
  SlotsArray[2],
  SlotsArray[1],
  SlotsArray[0],
];

describe('test views helpers', () => {
  it('sortSlotsBySmallest helper', () => {
    expect(sortSlotsBySmallest(SlotsArray)).toEqual(
      expect.arrayContaining(expectedSlotsArray)
    );
  });

  it('swapIndexes helper', () => {
    expect(swapIndexes(sortSlotsBySmallest(SlotsArray))).toEqual(
      expect.arrayContaining(expectedSwappedArray)
    );
  });
});
