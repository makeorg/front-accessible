// @flow
import {
  type TypeCurrentConsultation,
  type TypeHome,
} from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import CulturePicture from 'Client/app/assets/images/homepage/great-causes/cta-culture.svg';
import JeunePicture from 'Client/app/assets/images/homepage/great-causes/cta-jeune.svg';
import VffPicture from 'Client/app/assets/images/homepage/great-causes/cta-vff.svg';
import AinesPicture from 'Client/app/assets/images/homepage/great-causes/cta-aines.svg';

const currentConsultations: TypeCurrentConsultation[] = [
  {
    questionSlug: null,
    picture: CulturePicture,
    title: 'Comment rendre la Culture accessible à tous ?',
    altPicture: 'Comment rendre la Culture accessible à tous ?',
    description: 'Découvrez les idées qui ont émergé de notre consultation.',
    linkLabel: 'Découvrir les résultats',
    internalLink: null,
    externalLink: 'https://about.make.org/about-culture',
    proposalsNumber: 2500,
  },
  {
    questionSlug: null,
    picture: JeunePicture,
    title: 'Une chance pour chaque jeune',
    altPicture: 'Une chance pour chaque jeune',
    description: 'Découvrez les idées qui ont émergé de notre consultation.',
    linkLabel: 'Découvrir',
    internalLink: null,
    externalLink: 'https://about.make.org/about-chance-aux-jeunes',
    proposalsNumber: 1663,
  },
  {
    questionSlug: null,
    picture: VffPicture,
    title: 'Stop aux violences faîtes aux femmes',
    altPicture: 'Stop aux violences faîtes aux femmes',
    description: 'Découvrez l’état d’avancement de nos actions.',
    linkLabel: "Voir le plan d'actions",
    internalLink: null,
    externalLink: 'https://about.make.org/about-vff',
    proposalsNumber: 4300,
  },
  {
    questionSlug: null,
    picture: AinesPicture,
    title: 'Comment prendre soin de nos aînés ?',
    altPicture: 'Comment prendre soin de nos aînés ?',
    description:
      'Découvrez les idées qui ont émergé de notre consultation sur les aînés.',
    linkLabel: 'Découvrir les résultats',
    internalLink: null,
    externalLink: 'https://about.make.org/about-aines',
    proposalsNumber: 18300,
  },
];

export const getHome = async (): Promise<TypeHome> => {
  const response = await ViewsApiService.getHome();

  return {
    popularProposals: response.popularProposals,
    controverseProposals: response.controverseProposals,
    featuredConsultations: response.featuredConsultations,
    businessConsultations: response.businessConsultations,
    currentConsultations,
  };
};
