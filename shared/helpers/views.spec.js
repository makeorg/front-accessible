// @flow
import {
  sortSlotsBySmallest,
  swapIndexes,
  sortConsultationsByLatestDate,
} from './views';

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

describe('sortConsultationsByLatestDate', () => {
  const dates = [
    {
      questionSlug: 'consultation1',
      startDate: '2018-11-29T00:00:00.000Z',
    },
    {
      questionSlug: 'consultation2',
      startDate: '2018-08-01T17:36:00.000Z',
    },
    {
      questionSlug: 'consultation3',
      startDate: '2019-03-05T00:00:00.000Z',
    },
    {
      questionSlug: 'consultation4',
      startDate: '2018-10-17T22:00:00.000Z',
    },
    {
      questionSlug: 'consultationWithoutDate1',
    },
    {
      questionSlug: 'consultation5',
      startDate: '2019-01-23T00:00:00.000Z',
    },
    {
      questionSlug: 'consultationWithoutDate2',
    },
    {
      questionSlug: 'consultationWithoutDate3',
      startDate: null,
    },
    {
      questionSlug: 'consultation6',
      startDate: '2018-10-07T00:00:00.000Z',
    },
  ];

  const expectedDates = [
    {
      questionSlug: 'consultationWithoutDate1',
    },
    {
      questionSlug: 'consultationWithoutDate2',
    },
    {
      questionSlug: 'consultationWithoutDate3',
      startDate: null,
    },
    {
      questionSlug: 'consultation3',
      startDate: '2019-03-05T00:00:00.000Z',
    },
    {
      questionSlug: 'consultation5',
      startDate: '2019-01-23T00:00:00.000Z',
    },
    {
      questionSlug: 'consultation1',
      startDate: '2018-11-29T00:00:00.000Z',
    },
    {
      questionSlug: 'consultation4',
      startDate: '2018-10-17T22:00:00.000Z',
    },
    {
      questionSlug: 'consultation6',
      startDate: '2018-10-07T00:00:00.000Z',
    },
    {
      questionSlug: 'consultation2',
      startDate: '2018-08-01T17:36:00.000Z',
    },
  ];

  it('sortConsultationsByLatestDate return an Array with dates from latest to newest', () => {
    expect(sortConsultationsByLatestDate(dates)).toEqual(expectedDates);
  });
});
