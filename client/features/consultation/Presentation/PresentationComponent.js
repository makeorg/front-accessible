// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ParagraphRedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { Founders } from '../Founders';

type Props = {
  questionConfiguration: TypeQuestionConfiguration,
};

export const PresentationComponent = (props: Props) => {
  const { questionConfiguration } = props;
  const founders = questionConfiguration.partners.filter(
    partner => partner.isFounder
  );
  return (
    <React.Fragment>
      <ParagraphStyle
        id="presentation_text"
        dangerouslySetInnerHTML={{
          __html: questionConfiguration.consultation.presentation,
        }}
      />

      <ParagraphRedLinkStyle
        href={questionConfiguration.aboutUrl}
        onClick={() => Tracking.trackClickLearnMore()}
      >
        {i18n.t('consultation.presentation.link_text')}
        <SvgExternalLink
          aria-label={i18n.t('common.open_new_window')}
          style={{ marginLeft: '5px', fill: MakeThemeColors.Red }}
        />
      </ParagraphRedLinkStyle>
      <Founders
        founders={founders}
        isGreatCause={questionConfiguration.isGreatCause}
      />
    </React.Fragment>
  );
};
