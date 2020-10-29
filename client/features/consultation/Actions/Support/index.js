import React from 'react';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import {
  SupportWrapperStyle,
  SupportSeparatorStyle,
} from 'Client/features/consultation/Styled/Actions';
import { ClappingIconStyle } from 'Client/ui/Elements/Buttons/style';
import { i18n } from 'Shared/i18n';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { Image } from 'Client/ui/Image';

export const SupportContent = () => {
  return (
    <SupportWrapperStyle>
      <ThirdLevelTitleStyle>
        <ClappingIconStyle aria-hidden focusable="false" />
        {i18n.t('actions.support.title')}
      </ThirdLevelTitleStyle>
      <SupportSeparatorStyle />
      <ParagraphStyle>{i18n.t('actions.support.text')}</ParagraphStyle>
      <Image
        src="/images/consultation/actions.png"
        srcSet="/images/consultation/actions@2x.png 2x, /images/consultation/actions@3x.png 3x"
        alt=""
      />
    </SupportWrapperStyle>
  );
};
