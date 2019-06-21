import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { buildInternalConsultationLink } from 'Shared/helpers/url';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepagePaddingContentStyle } from 'Client/pages/Home/Styled';
import {
  CurrentConsultationsStyle,
  CurrentConsultationItemStyle,
  CurrentConsultationDescriptionStyle,
} from './Styled';
import { CurrentConsultationArticle } from './Article';

type Props = {
  consultations: ?(TypeCurrentConsultation[]),
  country: string,
  language: string,
};
export const CurrentConsultationsComponent = ({
  consultations,
  country,
  language,
}: Props) => {
  if (consultations.length <= 0) {
    return null;
  }

  return (
    <HomepagePaddingContentStyle
      id="great_cause_list"
      aria-labelledby="great_causes_title"
    >
      <HomeTitleStyle id="great_causes_title">
        {i18n.t('homepage.great-causes.title')}
      </HomeTitleStyle>
      <CurrentConsultationsStyle>
        {consultations.map(consultation => (
          <CurrentConsultationItemStyle key={consultation.title}>
            <CurrentConsultationArticle
              image={consultation.picture}
              title={consultation.title}
              linkText={consultation.linkLabel}
              linkObject={
                consultation.externalLink
                  ? {
                      as: 'a',
                      href: consultation.externalLink,
                      target: '_blank',
                    }
                  : {
                      to: buildInternalConsultationLink(
                        consultation.internalLink,
                        consultation.questionSlug,
                        country,
                        language
                      ),
                      as: Link,
                    }
              }
            >
              <CurrentConsultationDescriptionStyle>
                {consultation.description}
              </CurrentConsultationDescriptionStyle>
            </CurrentConsultationArticle>
          </CurrentConsultationItemStyle>
        ))}
      </CurrentConsultationsStyle>
    </HomepagePaddingContentStyle>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const CurrentConsultations = connect(mapStateToProps)(
  CurrentConsultationsComponent
);
