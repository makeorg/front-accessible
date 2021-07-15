/* @flow */

import { Logger } from 'Shared/services/Logger';
import * as features from 'Shared/constants/featureFlipping';

const featuresList: Array<mixed> = Object.values(features);

/**
 * Feature flipping
 */
export const checkIsFeatureActivated = (
  featureSlug: string,
  activesFeatures: Array<string>
): boolean => {
  if (!featuresList.includes(featureSlug)) {
    Logger.logWarning({
      message: `Feature "${featureSlug}" not found`,
      name: 'client-helper',
    });

    return false;
  }
  return [...activesFeatures].includes(featureSlug);
};

export const getFeatures = () => features;
