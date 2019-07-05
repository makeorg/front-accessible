// @flow
import {
  type TypeFeaturedConsultation,
  type TypeCurrentConsultation,
  type TypeBusinessConsultation,
  type TypeHome,
} from 'Shared/types/views';
import { ViewsApiService } from 'Shared/api/ViewsApiService';
import HandicapPicture from 'Client/app/assets/images/homepage/handicap_col1.jpg';
import HandicapMobilePicture from 'Client/app/assets/images/homepage/handicap_col2.jpg';
import AlimentationPicture from 'Client/app/assets/images/homepage/alimentation.jpg';
import MediasCitoyensPicture from 'Client/app/assets/images/homepage/medias-citoyens.jpg';
import CulturePicture from 'Client/app/assets/images/homepage/great-causes/cta-culture.svg';
import JeunePicture from 'Client/app/assets/images/homepage/great-causes/cta-jeune.svg';
import VffPicture from 'Client/app/assets/images/homepage/great-causes/cta-vff.svg';
import AinesPicture from 'Client/app/assets/images/homepage/great-causes/cta-aines.svg';

const featuredConsultations: TypeFeaturedConsultation[] = [
  {
    questionSlug: 'handicap',
    title:
      'Comment la société peut-elle garantir une vraie place aux personnes handicapées ?',
    description:
      'MAKE.ORG et ses partenaires ont lancé une consultation pour garantir une vraie place aux personnes handicapées. Votez, proposez, agissez !',
    landscapePicture: HandicapPicture,
    portraitPicture: HandicapMobilePicture,
    altPicture:
      'Comment la société peut-elle garantir une vraie place aux personnes handicapées ?',
    label: 'Grande cause',
    buttonLabel: 'Participez',
    internalLink: 'consultation',
    externalLink: null,
  },
  {
    questionSlug: null,
    title: 'Comment permettre à chacun de mieux manger ?',
    description: null,
    landscapePicture: AlimentationPicture,
    portraitPicture: AlimentationPicture,
    altPicture: 'Comment permettre à chacun de mieux manger ?',
    label: 'Grande cause',
    buttonLabel: 'Voir les résultats',
    internalLink: null,
    externalLink: 'https://about.make.org/about-mieuxmanger',
  },
  {
    questionSlug: 'medias-citoyens',
    title: 'Comment les médias peuvent-ils améliorer la société ?',
    description: null,
    landscapePicture: MediasCitoyensPicture,
    portraitPicture: MediasCitoyensPicture,
    altPicture: 'Comment les médias peuvent-ils améliorer la société ?',
    label: 'Actualité',
    buttonLabel: 'Participer',
    internalLink: 'consultation',
    externalLink: null,
  },
];

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
    proposalsNumber: 1001,
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
    proposalsNumber: 1001,
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
    proposalsNumber: 1001,
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
    proposalsNumber: 1001,
  },
];

const businessConsultations: TypeBusinessConsultation[] = [
  {
    theme: {
      gradientStart: 'rgb(255, 182, 98)',
      gradientEnd: 'rgb(255, 87, 87)',
    },
    startDate: '2019-05-06',
    endDate: '2019-07-07',
    slug: 'prevention-jeunes',
    aboutUrl: 'https://about.make.org/about-prevention-jeunes',
    title: 'Comment inciter les jeunes à mieux prendre soin de leur santé ?',
  },
  {
    theme: {
      gradientStart: '#1657ec',
      gradientEnd: '#1657ec',
    },
    startDate: '2019-03-05',
    endDate: '2019-04-25',
    slug: 'economiebienveillante',
    aboutUrl: 'https://about.make.org/about-economiebienveillante',
    title: 'Comment agir pour rendre notre économie plus bienveillante ?',
  },
  {
    theme: {
      gradientStart: 'rgb(125, 183, 227)',
      gradientEnd: 'rgb(93, 161, 19)',
    },
    startDate: '2018-10-18',
    endDate: '2019-02-06',
    slug: 'european-digital-champions',
    aboutUrl: 'https://about.make.org/about-european-digital-champions',
    title: 'Comment faire émerger des champions européens du numérique ?',
  },
];

export const getHome = async (): Promise<TypeHome> => {
  const response = await ViewsApiService.getHome();

  return {
    popularProposals: response.popularProposals,
    controverseProposals: response.controverseProposals,
    businessConsultations,
    featuredConsultations,
    currentConsultations,
  };
};
