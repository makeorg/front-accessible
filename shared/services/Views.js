// @flow
import { type TypeHome, type TypeSearchViews } from 'Shared/types/views';
import * as ViewsApiService from 'Shared/api/ViewsApiService';
import { Logger } from './Logger';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const getDate = dateString => {
  if (dateString === null) {
    return null;
  }
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    Logger.logError('Invalid date format on getHome');

    return null;
  }

  return date;
};

const orderByEndDate = (consultationA, consultationB) => {
  const dateA = getDate(consultationA.endDate);
  const dateB = getDate(consultationB.endDate);

  if (dateA === null && dateB === null) {
    return 0;
  }
  if (dateB === null) {
    return 1;
  }
  if (dateA === null) {
    return -1;
  }

  return dateB - dateA;
};

const getHome = async (): Promise<?TypeHome> => {
  try {
    const viewsResponse = await ViewsApiService.getHome();

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
      businessConsultations,
      currentConsultations: currentConsultations.sort(orderByEndDate),
    };
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
): Promise<?TypeSearchViews> => {
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
