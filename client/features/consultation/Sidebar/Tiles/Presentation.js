// @flow
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import React from 'react';
import { i18n } from 'Shared/i18n';
import {
  type Question as TypeQuestion,
  type TypePartner,
} from 'Shared/types/question';
import { PresentationTileWithTitleStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { DescriptionImageStyle } from 'Client/features/consultation/Styled/Presentation';
import { useMobile } from 'Client/hooks/useMedia';
import { isGreatCause } from 'Shared/helpers/question';
import { trackClickLearnMore } from 'Shared/services/Tracking';
import { FOUNDER_PARTNER, MEDIA_PARTNER } from 'Shared/constants/partner';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { Founders } from '../Founders';
import { SidebarNewWindowLink } from '../Link';

type Props = {
  question: TypeQuestion,
};
export const PresentationTile = ({ question }: Props) => {
  const isMobile = useMobile();
  const foundersOrMedia: TypePartner[] = question.partners
    ? question.partners.filter(
        partner =>
          partner.partnerKind === FOUNDER_PARTNER ||
          partner.partnerKind === MEDIA_PARTNER
      )
    : [];

  return (
    <>
      {!isMobile && question.descriptionImage && (
        <DescriptionImageStyle src={question.descriptionImage} alt="" />
      )}
      <TileWithTitle
        as={
          question.descriptionImage ? PresentationTileWithTitleStyle : undefined
        }
        title={i18n.t('consultation.presentation.title')}
      >
        {question.wording.description && (
          <ParagraphStyle
            id="presentation_text"
            dangerouslySetInnerHTML={{
              __html: question.wording.description,
            }}
          />
        )}
        {question.aboutUrl && (
          <SidebarNewWindowLink
            linkUrl={question.aboutUrl}
            linkText={i18n.t('consultation.presentation.link_text')}
            tracking={() => trackClickLearnMore()}
          />
        )}
        <Founders
          founders={foundersOrMedia}
          isGreatCause={isGreatCause(question.operationKind)}
        />
      </TileWithTitle>
    </>
  );
};
