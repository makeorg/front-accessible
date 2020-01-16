// @flow

import { TopIdeaApiService } from 'Shared/api/TopIdeaApiService';
import { getTopIdeas } from 'Shared/services/TopIdea';

jest.mock('Shared/api/TopIdeaApiService');
jest.mock('Shared/services/Logger');

describe('TopIdea Service', () => {
  describe('getTopIdeas function', () => {
    afterEach(() => {
      TopIdeaApiService.getTopIdeas.mockRestore();
    });

    it('order top ideas by weight', async () => {
      jest.spyOn(TopIdeaApiService, 'getTopIdeas');
      TopIdeaApiService.getTopIdeas.mockResolvedValue({
        questionTopIdeas: [
          {
            id: 1,
            weight: 10,
          },
          {
            id: 2,
            weight: 20,
          },
          {
            id: 3,
            weight: 30,
          },
        ],
        seed: 123123231,
      });

      const ideas = await getTopIdeas('fooQuestionId');

      expect(TopIdeaApiService.getTopIdeas).toHaveBeenNthCalledWith(
        1,
        'fooQuestionId'
      );
      expect(ideas).toEqual([
        {
          id: 3,
          weight: 30,
        },
        {
          id: 2,
          weight: 20,
        },
        {
          id: 1,
          weight: 10,
        },
      ]);
    });
  });
});
