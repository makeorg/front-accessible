// @flow

import { PersonalityApiService } from 'Shared/api/PersonalityApiService';
import {
  getPersonnalityOpinion,
  getPersonalityById,
  postPersonnalityComments,
} from 'Shared/services/Personality';

jest.mock('Shared/api/PersonalityApiService');
jest.mock('Shared/services/Logger');

describe('PersonalityApiService Service', () => {
  describe('getPersonalityId function', () => {
    it('getPersonalityId without questionId', async () => {
      jest.spyOn(PersonalityApiService, 'getPersonality');
      await getPersonalityById('1234');

      expect(PersonalityApiService.getPersonality).toHaveBeenNthCalledWith(
        1,
        '1234'
      );
    });
  });

  describe('postPersonnalityComments function', () => {
    it('postPersonnalityComments', async () => {
      jest.spyOn(PersonalityApiService, 'postPersonnalityComments');
      await postPersonnalityComments(
        '1234',
        '5678',
        'fooComment1',
        'barComment2',
        'bazComment3',
        'fooVote',
        'fooQualification'
      );

      expect(
        PersonalityApiService.postPersonnalityComments
      ).toHaveBeenNthCalledWith(
        1,
        '1234',
        '5678',
        'fooComment1',
        'barComment2',
        'bazComment3',
        'fooVote',
        'fooQualification'
      );
    });
  });

  describe('getPersonalityOpinion function', () => {
    afterEach(() => {
      PersonalityApiService.getPersonnalityOpinion.mockRestore();
    });

    it('getPersonalityOpinion without questionId', async () => {
      jest.spyOn(PersonalityApiService, 'getPersonnalityOpinion');
      await getPersonnalityOpinion('1234', undefined);

      expect(
        PersonalityApiService.getPersonnalityOpinion
      ).toHaveBeenNthCalledWith(1, '1234', undefined);
    });

    it('getPersonalityOpinion with questionId', async () => {
      jest.spyOn(PersonalityApiService, 'getPersonnalityOpinion');
      await getPersonnalityOpinion('1234', '5678');

      expect(
        PersonalityApiService.getPersonnalityOpinion
      ).toHaveBeenNthCalledWith(1, '1234', '5678');
    });
  });
});
