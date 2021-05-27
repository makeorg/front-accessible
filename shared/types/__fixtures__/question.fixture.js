export const questionTypeFixture = {
  questionId: 'c8375a43-81e8-472d-9a3a-f23f8061d21f',
  operationId: '0546bc34-4282-43b0-872d-a39f26c9848d',
  slug: 'weeuropeans-fr',
  wording: {
    title: 'We Europeans',
    question: "Comment réinventer l'Europe, concrètement ?",
    metas: {
      title: "Comment réinventer l'Europe, concrètement ?",
      description:
        "WeEuropeans est une campagne civique, démocratique et non-partisane. Elle rassemble les citoyens et les citoyennes européens quelles que soient leurs opinions en leur proposant de participer à la plus grande consultation populaire européenne jamais réalisée. L'Europe ne se fera plus sans nous.",
      picture:
        'https://assets.make.org/assets/images/meta-we-europeans-no-copy.png',
    },
  },
  country: 'FR',
  language: 'fr',
  allowedSources: ['core'],
  startDate: '2019-05-15T00:00:00.000Z',
  endDate: '2019-08-31T00:00:00.000Z',
  landingSequenceId: '58c8a7d3-6065-4ffc-842b-72d8d6d14368',
  operationTitle: 'WeEuropeans',
  canPropose: false,
  aboutUrl: 'https://weeuropeans.eu/fr/fr/about',
  sequenceConfig: {
    introCard: {
      enabled: true,
      title:
        "Des milliers de citoyens proposent des solutions pour réinventer l'Europe.",
      description: [
        'Prenez position sur ces solutions ou proposez les vôtres.',
        'Les idées les plus massivement soutenues devront être défendues par les candidats aux élections européennes.',
      ],
    },
    pushProposalCard: {
      enabled: false,
    },
    signUpCard: {
      enabled: true,
      title:
        'Recevez les résultats de la consultation et soyez informé(e) des actions à venir',
      nextCtaText:
        'Non merci, je ne souhaite pas être informé(e) des résultats.',
    },
    finalCard: {
      enabled: true,
      withSharing: true,
      linkUrl: 'https://weeuropeans.eu/fr/fr/about',
      title: 'Merci pour votre participation !',
      share: [
        "Vous souhaitez aller plus loin pour réinventer l'Europe ?",
        'Invitez vos proches et/ou votre communauté à participer',
      ],
      learnMoreTitle: 'Découvrez tout du projet We Europeans',
      learnMoreTextButton: 'En savoir +',
    },
  },
};

export const questionConfigurationTypeFixture = {
  sharing: {
    twitter: {
      hashtags: 'weeuropeans',
    },
  },
  theme: {
    color: '#3839ca',
    fontColor: 'white',
  },
};

export const questionResultsTypeFixture = {
  context:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.',
};
