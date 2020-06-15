import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  ConsultationsWrapperStyle,
  ConsultationElementStyle,
  ConsultationElementPicture,
  ConsultationElementSubtitle,
  ConsultationElementQuestion,
  ConsultationElementDateWrapper,
  ConsultationElementDateStyle,
  ConsultationRedLinkElementStyle,
  ConsultationsTitleWrapperStyle,
  ConsultationsTitleStyle,
  ConsultationsSubtitleStyle,
  BrowseClockIconStyle,
} from 'Client/features/consultation/Browse/style';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { BrowseConsultationsWrapperStyle } from './style';

export const BrowseConsultations = () => {
  return (
    <>
      <BrowseConsultationsWrapperStyle>
        <ConsultationsTitleWrapperStyle>
          <ConsultationsTitleStyle>
            {i18n.t('browse_consultations.title')}
          </ConsultationsTitleStyle>
          <ConsultationsSubtitleStyle>
            {i18n.t('browse_consultations.current.subtitle')}
          </ConsultationsSubtitleStyle>
        </ConsultationsTitleWrapperStyle>
        <ConsultationsWrapperStyle>
          {/* todo: when endpoint is created, map on data to build <BrowseElement/> */}
          <ConsultationElementStyle>
            <ConsultationElementPicture />
            <ConsultationElementSubtitle>
              Grande Cause Make.org
            </ConsultationElementSubtitle>
            <ConsultationElementQuestion>
              Comment agir ensemble dès maintenant pour l&apos;environnement ?
            </ConsultationElementQuestion>
            <ConsultationElementDateWrapper>
              <BrowseClockIconStyle />
              <ConsultationElementDateStyle>
                {i18n.t('browse_consultations.date')}
              </ConsultationElementDateStyle>
            </ConsultationElementDateWrapper>
            <ConsultationRedLinkElementStyle>
              {i18n.t('browse_consultations.current.participate')}
            </ConsultationRedLinkElementStyle>
          </ConsultationElementStyle>
        </ConsultationsWrapperStyle>
        <RedButtonStyle>{i18n.t('browse_consultations.browse')}</RedButtonStyle>
      </BrowseConsultationsWrapperStyle>
    </>
  );
};
