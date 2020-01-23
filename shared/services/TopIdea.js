// @flow
import { TopIdeaApiService } from 'Shared/api/TopIdeaApiService';
import { Logger } from 'Shared/services/Logger';
import {
  type ApiIdeaResponseType,
  type ApiIdeaDetailsResponseType,
} from 'Shared/types/api';

export const getTopIdeas = async (
  questionId: string
): Promise<ApiIdeaResponseType[]> => {
  const orderByWeight = (topIdea1, topIdea2) => {
    return topIdea2.weight - topIdea1.weight;
  };
  try {
    const topIdeasResponse = await TopIdeaApiService.getTopIdeas(questionId);

    return topIdeasResponse.questionTopIdeas.sort(orderByWeight);
  } catch (error) {
    Logger.logError(Error(error));
    return [];
  }
};

export const getTopIdea = async (
  questionId: string,
  topIdeaId: string
): Promise<ApiIdeaDetailsResponseType> => {
  try {
    const topIdea = await TopIdeaApiService.getTopIdea(questionId, topIdeaId);

    return topIdea;
  } catch (error) {
    Logger.logError(Error(error));
    return {};
  }
};
