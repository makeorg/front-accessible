import { type FeaturedConsultationType } from 'Shared/types/views';

export const sortSlotsBySmallest: (
  FeaturedConsultationType[]
) => TypeFeaturedConsultation = featureds => {
  const sortedFeatureds: FeaturedConsultationType[] = featureds.sort((a, b) => {
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
