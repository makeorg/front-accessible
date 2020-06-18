// @flow
import {
  type DeprecatedHomeType,
  type HomeViewType,
  type SearchViewsType,
} from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { orderByEndDate } from 'Shared/helpers/date';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const getDeprecatedHome = async (): Promise<?DeprecatedHomeType> => {
  try {
    const viewsResponse = await ViewsApiService.getDeprecatedHome();
    const {
      currentConsultations,
      popularProposals,
      controverseProposals,
      featuredConsultations,
      businessConsultations,
    } = viewsResponse.data;

    return {
      popularProposals,
      controverseProposals,
      featuredConsultations,
      businessConsultations: businessConsultations.sort(orderByEndDate),
      currentConsultations: currentConsultations.sort(orderByEndDate),
    };
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getHome = async (
  country: string,
  language: string
): Promise<?HomeViewType> => {
  try {
    const viewsResponse = await ViewsApiService.getHome(country, language);

    return viewsResponse.data;
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
  getDeprecatedHome,
  getHome,
};
