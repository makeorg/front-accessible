import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgMail } from 'Client/ui/Svg/elements';
import { useDispatch } from 'react-redux';
import { modalShowRegister } from 'Shared/store/actions/modal';
import {
  NoConsultationWrapperStyle,
  NoConsultationImageStyle,
  SvgMailWrapperStyle,
  NoConsultationTextStyle,
  ConsultationRedLinkElementStyle,
} from './style';

export const NoConsultation = ({ length }: Number) => {
  const dispatch = useDispatch();
  return (
    <NoConsultationWrapperStyle>
      <NoConsultationImageStyle>
        <SvgMailWrapperStyle>
          <SvgMail />
        </SvgMailWrapperStyle>
      </NoConsultationImageStyle>
      <NoConsultationTextStyle>
        {length === 0
          ? i18n.t('browse_consultations.text_content_zero')
          : i18n.t('browse_consultations.text_content_one')}
      </NoConsultationTextStyle>
      <ConsultationRedLinkElementStyle
        onClick={() => dispatch(modalShowRegister())}
        aria-label={i18n.t('common.register_label')}
      >
        {i18n.t('browse_consultations.subscribe')}
      </ConsultationRedLinkElementStyle>
    </NoConsultationWrapperStyle>
  );
};
