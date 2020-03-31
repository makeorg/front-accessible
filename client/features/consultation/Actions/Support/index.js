import React from 'react';
import { SvgClapping } from 'Client/ui/Svg/elements';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import {
  SupportWrapperStyle,
  SupportSeparatorStyle,
} from 'Client/features/consultation/Styled/Actions';
import { IconWrapperStyle } from 'Client/ui/Elements/Buttons/style';
import { i18n } from 'Shared/i18n';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const SupportContent = () => {
  return (
    <SupportWrapperStyle>
      <ThirdLevelTitleStyle>
        <IconWrapperStyle>
          <SvgClapping />
        </IconWrapperStyle>
        {i18n.t('actions.support.title')}
      </ThirdLevelTitleStyle>
      <SupportSeparatorStyle />
      <ParagraphStyle>{i18n.t('actions.support.text')}</ParagraphStyle>
      <img
        src="/images/consultation/actions.png"
        srcSet="/images/consultation/actions@2x.png 2x, /images/consultation/actions@3x.png 3x"
        alt=""
      />
    </SupportWrapperStyle>
  );
};
