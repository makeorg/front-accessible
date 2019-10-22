// @flow
import * as React from 'react';
import { type FinalCardConfig } from 'Shared/types/card';
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
  return (
    <ContentWrapperStyle>
      <InnerContentStyle>
        <FinalTitle title={configuration.title} />
        <FinalCardContentWrapperStyle>
          <Sharing text={configuration.share} />
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
