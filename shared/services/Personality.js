// @flow
import { Logger } from 'Shared/services/Logger';
import { type TypeUser } from 'Shared/types/user';
import { PersonalityApiService } from 'Shared/api/PesronalityApiService';

export const getPersonalityById = async (userId: string): Promise<TypeUser> => {
  try {
    const response = await PersonalityApiService.getPersonality(userId);
    return response;
  } catch (error) {
    return Logger.logError(Error(error));
  }
};
