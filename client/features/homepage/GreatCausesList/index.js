import React from 'react';
import { i18n } from 'Shared/i18n';
import { HomeTitleStyle } from 'Client/ui/Elements/TitleElements';
import { HomepagePaddingContentStyle } from 'Client/pages/Home/Styled';
import {
  GreatCausesListStyle,
  GreatCausesListItemStyle,
  GreatCausesDescriptionStyle,
} from './Styled';
import { GreatCauseArticle } from './Article';

const greatCauseArray = [
  {
    image: '/images/homepage/great-causes/cta-culture.svg',
    title: 'Comment rendre la Culture accessible à tous ?',
    linkText: 'Découvrir les résultats',
    linkUrl: 'https://about.make.org/about-culture',
    content: 'Découvrez les idées qui ont émergé de notre consultation.',
  },
  {
    image: '/images/homepage/great-causes/cta-jeune.svg',
    title: 'Une chance pour chaque jeune',
    linkText: 'Découvrir',
    linkUrl: 'https://about.make.org/about-chance-aux-jeunes',
    content: 'Découvrez les idées qui ont émergé de notre consultation.',
  },
  {
    image: '/images/homepage/great-causes/cta-vff.svg',
    title: 'Stop aux violences faîtes aux femmes',
    linkText: "Voir le plan d'actions",
    linkUrl: 'https://about.make.org/about-vff',
    content: 'Découvrez l’état d’avancement de nos actions.',
  },
  {
    image: '/images/homepage/great-causes/cta-aines.svg',
    title: 'Comment prendre soin de nos aînés ?',
    linkText: 'Découvrir les résultats',
    linkUrl: 'https://about.make.org/about-aines',
    content:
      'Découvrez les idées qui ont émergé de notre consultation sur les aînés.',
  },
];

export const GreatCausesList = () => {
  return (
    <HomepagePaddingContentStyle aria-labelledby="great_causes_title">
      <HomeTitleStyle id="great_causes_title">
        {i18n.t('homepage.great-causes.title')}
      </HomeTitleStyle>
      <GreatCausesListStyle>
        {greatCauseArray.map(greatCause => (
          <GreatCausesListItemStyle key={greatCause.title}>
            <GreatCauseArticle
              image={greatCause.image}
              title={greatCause.title}
              linkText={greatCause.linkText}
              linkUrl={greatCause.linkUrl}
            >
              <GreatCausesDescriptionStyle>
                {greatCause.content}
              </GreatCausesDescriptionStyle>
            </GreatCauseArticle>
          </GreatCausesListItemStyle>
        ))}
      </GreatCausesListStyle>
    </HomepagePaddingContentStyle>
  );
};
