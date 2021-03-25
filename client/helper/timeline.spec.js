import { buildTimeline, getStepTitle } from './timeline';

describe('timeline helper', () => {
  describe('Build timeline', () => {
    const timeline = {
      action: {
        date: '2021-03-20',
        dateText: 'Mars 2021',
        description: 'foo',
      },
      result: {
        date: '2021-02-23',
        dateText: 'Fevrier 2021',
        description: 'bar',
      },
      workshop: {
        date: '2021-04-13',
        dateText: 'Mai 2021',
        description: 'baz',
      },
    };
    const sortedTimeline = [
      {
        name: 'result',
        date: '2021-02-23',
        dateText: 'Fevrier 2021',
        description: 'bar',
      },
      {
        name: 'action',
        date: '2021-03-20',
        dateText: 'Mars 2021',
        description: 'foo',
      },
      {
        name: 'workshop',
        date: '2021-04-13',
        dateText: 'Mai 2021',
        description: 'baz',
      },
    ];

    it('return sorted timeline', () => {
      expect(buildTimeline(timeline)).toEqual(sortedTimeline);
    });
  });

  describe('Get step Title', () => {
    it('return result step title', () => {
      expect(getStepTitle('result')).toEqual(
        'consultation.timeline.result_title'
      );
    });
    it('return workshop step title', () => {
      expect(getStepTitle('workshop')).toEqual(
        'consultation.timeline.workshop_title'
      );
    });
    it('return action step title', () => {
      expect(getStepTitle('action')).toEqual(
        'consultation.timeline.action_title'
      );
    });
    it('return default', () => {
      expect(getStepTitle('foo')).toEqual(null);
    });
  });
});
