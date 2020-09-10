// @flow
import { type HomeViewType, type SearchViewsType } from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const getHome = async (
  country: string,
  language: string
): Promise<?HomeViewType> => {
  try {
    const viewsResponse = await ViewsApiService.getHome(country, language);

    // toDo: hack multi-countries
    const { data } = viewsResponse;
    const result = {
      ...data,
      currentQuestions: data.currentQuestions.map(question => ({
        ...question,
        country: question.countries[0],
      })),
      featuredQuestions: data.featuredQuestions.map(question => ({
        ...question,
        country: question.countries[0],
      })),
    };

    return result;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const searchViews = async (
  content: string,
  country: string,
  language: string,
  proposalLimit?: number = 4,
  questionLimit?: number = 4,
  organisationLimit?: number = 4
): Promise<?SearchViewsType> => {
  try {
    const searchResponse = await ViewsApiService.searchViews(
      content,
      country,
      language,
      proposalLimit,
      questionLimit,
      organisationLimit
    );

    return searchResponse.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const ViewsService = {
  searchViews,
  getHome,
};
