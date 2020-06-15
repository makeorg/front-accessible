import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgMail } from 'Client/ui/Svg/elements';
import {
  NoConsultationWrapperStyle,
  NoConsultationImageStyle,
  SvgMailWrapperStyle,
  NoConsultationTextStyle,
  ConsultationRedLinkElementStyle,
} from './style';

export const NoConsultation = () => {
  return (
    <NoConsultationWrapperStyle>
      <NoConsultationImageStyle>
        <SvgMailWrapperStyle>
          <SvgMail />
        </SvgMailWrapperStyle>
      </NoConsultationImageStyle>
      <NoConsultationTextStyle>
        {i18n.t('browse_consultations.text_content_zero')}
      </NoConsultationTextStyle>
      <ConsultationRedLinkElementStyle>
        {i18n.t('browse_consultations.subscribe')}
      </ConsultationRedLinkElementStyle>
    </NoConsultationWrapperStyle>
  );
};
