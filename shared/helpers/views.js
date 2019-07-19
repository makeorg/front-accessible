import { type TypeFeaturedConsultation } from 'Shared/types/views';

export const sortSlotsBySmallest: (
  TypeFeaturedConsultation[]
) => TypeFeaturedConsultation = featureds => {
  const sortedFeatureds: TypeFeaturedConsultation[] = featureds.sort((a, b) => {
    if (!a.slot || !b.slot) {
      return 0;
    }

    return a.slot - b.slot;
  });

  return sortedFeatureds;
};

export const swapIndexes = (initalArray: any[]) => {
  const swapedArray = [];

  swapedArray.push(
    initalArray[0],
    initalArray[2],
    initalArray[1],
    initalArray[3]
  );

  return swapedArray;
};

export const sortConsultationsByLatestDate: (
  TypeBusinessConsultation[]
) => TypeBusinessConsultation[] = consultations => {
  const sortedArray = consultations.sort((a, b) => {
    const dateA = new Date(a.startDate !== null ? a.startDate : undefined);
    const dateB = new Date(b.startDate !== null ? b.startDate : undefined);
    const isDefinedDate = dateToCheck => !Number.isNaN(dateToCheck.getTime());

    switch (true) {
      case isDefinedDate(dateA) && !isDefinedDate(dateB):
        return 1;
      case !isDefinedDate(dateA) && isDefinedDate(dateB):
        return -1;
      case !isDefinedDate(dateA) && !isDefinedDate(dateB):
        return 0;
      default:
        return dateB - dateA;
    }
  });

  return sortedArray;
};
