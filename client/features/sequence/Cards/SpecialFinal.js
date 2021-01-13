import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  SpecialSequenceFinalWrapperStyle,
  SequenceIntroButtonStyle,
  SequenceMainTitleStyle,
  SequenceParagraphStyle,
  SpecialSequenceFinalContentStyle,
} from './style';

export const SpecialFinalCard = () => (
  <SpecialSequenceFinalWrapperStyle>
    <SpecialSequenceFinalContentStyle>
      <SequenceMainTitleStyle>
        {i18n.t('special_final_card.title')}
      </SequenceMainTitleStyle>
      <SequenceParagraphStyle>
        {i18n.t('special_final_card.subtitle')}
      </SequenceParagraphStyle>
      <SequenceIntroButtonStyle>
        {i18n.t('special_final_card.cta_text')}
      </SequenceIntroButtonStyle>
    </SpecialSequenceFinalContentStyle>
  </SpecialSequenceFinalWrapperStyle>
);
