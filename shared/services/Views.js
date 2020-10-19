// @flow
import { type HomeViewType, type SearchViewsType } from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const getHome = async (country: string): Promise<?HomeViewType> => {
  try {
    const { data } = await ViewsApiService.getHome(country);

    return data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const searchViews = async (
  content: string,
  country: string,
  proposalLimit?: number = 4,
  questionLimit?: number = 4,
  organisationLimit?: number = 4
): Promise<?SearchViewsType> => {
  try {
    const searchResponse = await ViewsApiService.searchViews(
      content,
      country,
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
