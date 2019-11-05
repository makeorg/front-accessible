// @flow
import * as React from 'react';
import { type FinalCardConfig } from 'Shared/types/card';
import { useSelector } from 'react-redux';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_SHARE_DISABLE } from 'Shared/constants/featureFlipping';
import { FinalTitle } from './Title';
import { Sharing } from './Sharing';
import { More } from './More';
import {
  ContentWrapperStyle,
  InnerContentStyle,
  FinalCardContentWrapperStyle,
} from '../Styled/Content';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
};

/**
 * Renders Final Card of the Sequence
 */
export const FinalCardComponent = ({ configuration }: Props) => {
  const question = useSelector(
    state =>
      state.currentQuestion &&
      state.questions[state.currentQuestion] &&
      state.questions[state.currentQuestion].question
  );
  const isSharingDisabled: boolean = checkIsFeatureActivated(
    CONSULTATION_SHARE_DISABLE,
    question.activeFeatures
  );

  return (
    <ContentWrapperStyle>
      <InnerContentStyle>
        <FinalTitle title={configuration.title} />
        <FinalCardContentWrapperStyle>
          {configuration.share && !isSharingDisabled && (
            <Sharing text={configuration.share} />
          )}
          <More
            title={configuration.learnMoreTitle}
            url={configuration.linkUrl}
            textButton={configuration.learnMoreTextButton}
          />
        </FinalCardContentWrapperStyle>
      </InnerContentStyle>
    </ContentWrapperStyle>
  );
};
