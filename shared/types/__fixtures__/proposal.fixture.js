export const proposalTypeFixture = {
  id: '123456789',
  userId: '123456789',
  content: 'Il faut prendre soin du styleguide',
  slug: 'il-faut-prendre-soin-du-styleguide',
  author: {
    firstName: 'Mickael',
    age: 31,
  },
  createdAt: '2018-10-24T12:45:25.752Z',
  updatedAt: '2055-06-05T09:15:51.685Z',
  country: 'FR',
  language: 'fr',
  votes: [
    {
      count: 18,
      hasVoted: false,
      qualifications: [
        {
          count: 4,
          countVerified: 4,
          hasQualified: true,
          qualificationKey: 'likeIt',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'doable',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'platitudeAgree',
        },
      ],
      voteKey: 'agree',
    },
    {
      count: 5,
      hasVoted: false,
      qualifications: [
        {
          count: 0,
          countVerified: 0,
          hasQualified: false,
          qualificationKey: 'noWay',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'impossible',
        },
        {
          count: 3,
          countVerified: 3,
          hasQualified: false,
          qualificationKey: 'platitudeDisagree',
        },
      ],
      voteKey: 'disagree',
    },
    {
      count: 7,
      hasVoted: false,
      qualifications: [
        {
          count: 4,
          countVerified: 4,
          hasQualified: false,
          qualificationKey: 'doNotUnderstand',
        },
        {
          count: 1,
          countVerified: 1,
          hasQualified: false,
          qualificationKey: 'noOpinion',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'doNotCare',
        },
      ],
      voteKey: 'neutral',
    },
  ],
  tags: [
    {
      tagId: 'atom',
      label: 'atom',
      display: true,
    },
    {
      tagId: 'molecules',
      label: 'molecules',
      display: true,
    },
    {
      tagId: 'templates',
      label: 'templates',
      display: true,
    },
    {
      tagId: 'pages',
      label: 'pages',
      display: true,
    },
  ],
  status: 'Accepted',
  trending: 'popular',
  labels: [],
  organisations: [
    {
      organisationId: '12345',
      organisationName: 'Make.org',
      organisationSlug: 'makeorg',
    },
    {
      organisationId: '123456',
      organisationName: 'Foo',
      organisationSlug: 'foo',
    },
    {
      organisationId: '1234567',
      organisationName: 'Bar',
      organisationSlug: 'bar',
    },
    {
      organisationId: '12345678',
      organisationName: 'Baz',
      organisationSlug: 'baz',
    },
  ],
  themeId: null,
  myProposal: false,
  idea: '123456789',
  operationId: '123456789',
  question: {
    questionId: '123456789',
    slug: 'styleguide',
    startDate: '2019-05-15T00:00:00.000Z',
    endDate: '2055-08-31T00:00:00.000Z',
    wording: {
      title: 'Styleguide',
      question: 'Est ce que cette documentation est bonne ?',
    },
  },
  proposalKey: '123456789',
};

export const endedProposalTypeFixture = {
  id: '123456789',
  userId: '123456789',
  content: 'Il faut prendre soin du styleguide',
  slug: 'il-faut-prendre-soin-du-styleguide',
  author: {
    firstName: 'Mickael',
    age: 31,
  },
  createdAt: '2018-10-24T12:45:25.752Z',
  updatedAt: '2055-06-05T09:15:51.685Z',
  country: 'FR',
  language: 'fr',
  votes: [
    {
      count: 18,
      hasVoted: false,
      qualifications: [
        {
          count: 4,
          countVerified: 4,
          hasQualified: true,
          qualificationKey: 'likeIt',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'doable',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'platitudeAgree',
        },
      ],
      voteKey: 'agree',
    },
    {
      count: 5,
      hasVoted: false,
      qualifications: [
        {
          count: 0,
          countVerified: 0,
          hasQualified: false,
          qualificationKey: 'noWay',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'impossible',
        },
        {
          count: 3,
          countVerified: 3,
          hasQualified: false,
          qualificationKey: 'platitudeDisagree',
        },
      ],
      voteKey: 'disagree',
    },
    {
      count: 7,
      hasVoted: false,
      qualifications: [
        {
          count: 4,
          countVerified: 4,
          hasQualified: false,
          qualificationKey: 'doNotUnderstand',
        },
        {
          count: 1,
          countVerified: 1,
          hasQualified: false,
          qualificationKey: 'noOpinion',
        },
        {
          count: 2,
          countVerified: 2,
          hasQualified: false,
          qualificationKey: 'doNotCare',
        },
      ],
      voteKey: 'neutral',
    },
  ],
  tags: [
    {
      tagId: 'atom',
      label: 'atom',
      display: true,
    },
    {
      tagId: 'molecules',
      label: 'molecules',
      display: true,
    },
    {
      tagId: 'templates',
      label: 'templates',
      display: true,
    },
    {
      tagId: 'pages',
      label: 'pages',
      display: true,
    },
  ],
  status: 'Accepted',
  trending: 'popular',
  labels: [],
  organisations: [
    {
      organisationId: '12345',
      organisationName: 'Make.org',
      organisationSlug: 'makeorg',
    },
    {
      organisationId: '123456',
      organisationName: 'Foo',
      organisationSlug: 'foo',
    },
    {
      organisationId: '1234567',
      organisationName: 'Bar',
      organisationSlug: 'bar',
    },
    {
      organisationId: '12345678',
      organisationName: 'Baz',
      organisationSlug: 'baz',
    },
  ],
  themeId: null,
  myProposal: false,
  idea: '123456789',
  operationId: '123456789',
  question: {
    questionId: '123456789',
    slug: 'styleguide',
    startDate: '2019-05-15T00:00:00.000Z',
    endDate: '2019-05-16T00:00:00.000Z',
    wording: {
      title: 'Styleguide',
      question: 'Est ce que cette documentation est bonne ?',
    },
  },
  proposalKey: '123456789',
};
