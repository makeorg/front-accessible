// @flow
import { Logger } from 'Shared/services/Logger';
import { type TypeUser } from 'Shared/types/user';
import {
  type PersonalityCommentsType,
  type PersonalityOpinionType,
} from 'Shared/types/personality';
import { PersonalityApiService } from 'Shared/api/PersonalityApiService';

export const getPersonalityById = async (userId: string): Promise<TypeUser> => {
  try {
    const response = await PersonalityApiService.getPersonality(userId);
    return response;
  } catch (error) {
    return Logger.logError(Error(error));
  }
};

export const postPersonnalityComments = async (
  userId: string,
  topIdeaId: string,
  comment1: string,
  comment2: string,
  comment3: string,
  vote: string,
  qualification: string
): Promise<PersonalityCommentsType> => {
  try {
    return await PersonalityApiService.postPersonnalityComments(
      userId,
      topIdeaId,
      comment1,
      comment2,
      comment3,
      vote,
      qualification
    );
  } catch (error) {
    return Logger.logError(Error(error));
  }
};

export const getPersonnalityOpinion = async (
  userId: string,
  questionId?: string
): Promise<PersonalityOpinionType[]> => {
  try {
    return await PersonalityApiService.getPersonnalityOpinion(
      userId,
      questionId
    );
  } catch (error) {
    return Logger.logError(Error(error));
  }
};
