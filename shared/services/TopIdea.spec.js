// @flow

import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { TopIdeaService } from 'Shared/services/TopIdea';

jest.mock('Shared/api/QuestionApiService');
jest.mock('Shared/services/Logger');

describe('TopIdea Service', () => {
  describe('getTopIdeas function', () => {
    afterEach(() => {
      QuestionApiService.getTopIdeas.mockRestore();
    });

    it('order top ideas by weight', async () => {
      jest.spyOn(QuestionApiService, 'getTopIdeas');
      QuestionApiService.getTopIdeas.mockResolvedValue({
        data: {
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
        },
      });

      const ideas = await TopIdeaService.getTopIdeas('fooQuestionId');

      expect(QuestionApiService.getTopIdeas).toHaveBeenNthCalledWith(
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
