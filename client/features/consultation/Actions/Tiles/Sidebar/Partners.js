// @flow
import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { i18n } from 'Shared/i18n';
import { PartnersList } from 'Client/features/consultation/Partners/List';
import { ParagraphRedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { getPartnerAnchor } from 'Shared/helpers/url';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { SvgExternalLink } from 'Client/ui/Svg/elements';

type Props = {
  questionConfiguration: QuestionConfiguration,
  trackMoreLink: () => void,
};

export const PartnersTileContent = (props: Props) => {
  const { questionConfiguration, trackMoreLink } = props;
  const { partners, aboutUrl } = questionConfiguration;

  return (
    <React.Fragment>
      <ParagraphStyle>{i18n.t('actions.partners.text')}</ParagraphStyle>
      {partners && <PartnersList partners={partners} />}
      <ParagraphRedLinkStyle
        href={getPartnerAnchor(aboutUrl)}
        onClick={trackMoreLink}
        target="_blank"
      >
        {i18n.t('consultation.partners.commitment_link')}
        <SvgExternalLink
          aria-label={i18n.t('common.open_new_window')}
          style={{ marginLeft: '5px', fill: MakeThemeColors.Red }}
        />
      </ParagraphRedLinkStyle>
    </React.Fragment>
  );
};
