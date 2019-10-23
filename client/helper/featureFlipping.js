/* @flow */

import { Logger } from 'Shared/services/Logger';

/**
 * Feature flipping
 */
export type isActiveFeatureFunction = (featureSlug: string) => boolean;

// Declare available features with a slug list
export const features = [
  'operation-multi-questions-navigation',
  'consultation-department-compulsory',
];

export const getIsActiveFeature = (
  activeFeatures: string[]
): isActiveFeatureFunction => (featureSlug: string): boolean => {
  if (!features.includes(featureSlug)) {
    Logger.logWarning(`Feature "${featureSlug}" not found`);

    return false;
  }

  return activeFeatures.includes(featureSlug);
};

export const getFeatures = () => features;
