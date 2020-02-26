// @flow
import { type TypeUser } from 'Shared/types/user';
import {
  type PersonalityCommentsType,
  type PersonalityOpinionType,
} from 'Shared/types/personality';
import { PersonalityApiService } from 'Shared/api/PersonalityApiService';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const getPersonalityById = async (userId: string): Promise<?TypeUser> => {
  try {
    const response = await PersonalityApiService.getPersonality(userId);

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const postPersonnalityComments = async (
  userId: string,
  topIdeaId: string,
  comment1: string,
  comment2: string,
  comment3: string,
  vote: string,
  qualification: string
): Promise<?PersonalityCommentsType> => {
  try {
    const response = await PersonalityApiService.postPersonnalityComments(
      userId,
      topIdeaId,
      comment1,
      comment2,
      comment3,
      vote,
      qualification
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getPersonnalityOpinion = async (
  userId: string,
  questionId?: string
): Promise<?(PersonalityOpinionType[])> => {
  try {
    const response = await PersonalityApiService.getPersonnalityOpinion(
      userId,
      questionId
    );
    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const PersonalityService = {
  getPersonalityById,
  postPersonnalityComments,
  getPersonnalityOpinion,
};
