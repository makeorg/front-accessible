// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { IntroParagraphStyle, MoreWrapperStyle } from '../../Styled/Content';
import { FinalLinkStyle } from '../../Styled/Buttons';

type Props = {
  /** Title of the More paragraph */
  title?: string,
  /** Url of show more button */
  url?: string,
};

/**
 * Renders finalCard More component
 */
export const More = (props: Props) => {
  const { title, url } = props;

  return (
    <MoreWrapperStyle>
      <IntroParagraphStyle>
        {title || i18n.t('final_card.more.title')}
      </IntroParagraphStyle>
      <FinalLinkStyle
        as="a"
        href={url}
        onClick={() => Tracking.trackClickLearnMore()}
      >
        {i18n.t('final_card.more.button')}
      </FinalLinkStyle>
    </MoreWrapperStyle>
  );
};
