// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgMail } from 'Client/ui/Svg/elements';
import { useDispatch } from 'react-redux';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { trackClickSubscribe } from 'Shared/services/Tracking';
import {
  NoConsultationWrapperStyle,
  NoConsultationImageStyle,
  ConsultationElementTitleStyle,
  NoConsultationButtonStyle,
} from './style';

type Props = {
  length: number,
};

export const RegistrationIncentive = ({ length }: Props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalShowRegister());
    trackClickSubscribe('subscribe-next-consultation');
  };

  return (
    <NoConsultationWrapperStyle>
      <NoConsultationImageStyle>
        <SvgMail aria-hidden focusable="false" />
      </NoConsultationImageStyle>
      <ConsultationElementTitleStyle>
        {length === 0
          ? i18n.t('browse.text_content_zero')
          : i18n.t('browse.text_content_one')}
      </ConsultationElementTitleStyle>
      <NoConsultationButtonStyle
        onClick={handleClick}
        aria-label={i18n.t('common.register_label')}
        data-cy-link="subscribe"
      >
        {i18n.t('browse.subscribe')}
      </NoConsultationButtonStyle>
    </NoConsultationWrapperStyle>
  );
};
