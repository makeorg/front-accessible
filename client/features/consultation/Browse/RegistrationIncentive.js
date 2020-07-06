// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgMail } from 'Client/ui/Svg/elements';
import { useDispatch } from 'react-redux';
import { modalShowRegister } from 'Shared/store/actions/modal';
import {
  NoConsultationWrapperStyle,
  NoConsultationImageStyle,
  ConsultationElementTitleStyle,
  ConsultationRedLinkElementStyle,
} from './style';

type Props = {
  length: number,
};

export const RegistrationIncentive = ({ length }: Props) => {
  const dispatch = useDispatch();
  return (
    <NoConsultationWrapperStyle>
      <NoConsultationImageStyle>
        <SvgMail aria-hidden />
      </NoConsultationImageStyle>
      <ConsultationElementTitleStyle>
        {length === 0
          ? i18n.t('browse.text_content_zero')
          : i18n.t('browse.text_content_one')}
      </ConsultationElementTitleStyle>
      <ConsultationRedLinkElementStyle
        onClick={() => dispatch(modalShowRegister())}
        aria-label={i18n.t('common.register_label')}
      >
        {i18n.t('browse.subscribe')}
      </ConsultationRedLinkElementStyle>
    </NoConsultationWrapperStyle>
  );
};
