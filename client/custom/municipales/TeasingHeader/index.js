// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { MailToRedLinkStyle } from 'Client/ui/Elements/LinkElements';
import {
  TeasingHeaderContainerStyle,
  TeasingHeaderWrapperStyle,
  TeasingHeaderCenterStyle,
  TeasingHeaderTextStyle,
  TeasingHeaderSubTextStyle,
} from './style';

export const TeasingHeader = () => {
  const dispatch = useDispatch();
  return (
    <TeasingHeaderContainerStyle>
      <TeasingHeaderWrapperStyle>
        <TeasingHeaderCenterStyle>
          <TeasingHeaderTextStyle>
            {i18n.t('consultation.municipal.header.candidates_answers')}
          </TeasingHeaderTextStyle>
          <TeasingHeaderSubTextStyle
            onClick={() => dispatch(modalShowRegister())}
            dangerouslySetInnerHTML={{
              __html: i18n.t(
                'consultation.municipal.header.candidates_subscribe',
                {
                  subscribe: `<a>$t(consultation.municipal.header.subscribe)</a>`,
                }
              ),
            }}
          />
        </TeasingHeaderCenterStyle>
        <TeasingHeaderCenterStyle>
          <TeasingHeaderTextStyle>
            {i18n.t('consultation.municipal.header.candidates')}
          </TeasingHeaderTextStyle>
          <TeasingHeaderSubTextStyle>
            <MailToRedLinkStyle href="mailto:candidats-municipales@make.org">
              {i18n.t('consultation.municipal.header.contact_us')}
            </MailToRedLinkStyle>
          </TeasingHeaderSubTextStyle>
        </TeasingHeaderCenterStyle>
      </TeasingHeaderWrapperStyle>
    </TeasingHeaderContainerStyle>
  );
};
