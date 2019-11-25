// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import {
  type Question as TypeQuestion,
  type TypePartner,
} from 'Shared/types/question';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { trackClickLearnMore } from 'Shared/services/Tracking';
import { FOUNDER_PARTNER, MEDIA_PARTNER } from 'Shared/constants/partner';
import { SidebarNewWindowLink } from '../Link';
import { Founders } from '../Founders';

type Props = {
  question: TypeQuestion,
};

export const Presentation = ({ question }: Props) => {
  const foundersOrMedia: TypePartner[] = question.partners
    ? question.partners.filter(
        partner =>
          partner.partnerKind === FOUNDER_PARTNER ||
          partner.partnerKind === MEDIA_PARTNER
      )
    : [];

  return (
    <React.Fragment>
      {question.wording.description && (
        <ParagraphStyle
          id="presentation_text"
          dangerouslySetInnerHTML={{
            __html: question.wording.description,
          }}
        />
      )}
      <SidebarNewWindowLink
        linkUrl={question.aboutUrl}
        linkText={i18n.t('consultation.presentation.link_text')}
        tracking={() => trackClickLearnMore()}
      />
      <Founders
        founders={foundersOrMedia}
        isGreatCause={isGreatCause(question.operationKind)}
      />
    </React.Fragment>
  );
};
