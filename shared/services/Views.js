// @flow
import { type TypeHome } from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import { Logger } from './Logger';

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

export const getHome = async (): Promise<TypeHome> => {
  const response = await ViewsApiService.getHome();
  const {
    currentConsultations,
    popularProposals,
    controverseProposals,
    featuredConsultations,
    businessConsultations,
  } = response;
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

  return {
    popularProposals,
    controverseProposals,
    featuredConsultations,
    businessConsultations,
    currentConsultations: currentConsultations.sort(orderByEndDate),
  };
};
