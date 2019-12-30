const defaultQuestion = require('../db/defaultQuestion.json');
const defaultProposal = require('../db/defaultProposal.json');
const defaultPartner = require('../db/defaultPartner.json');
const defaultPopularTag = require('../db/defaultPopularTag.json');
const defaultTag = require('../db/defaultTag.json');
const defaultVote = require('../db/defaultVote.json');
const defaultOrganisation = require('../db/defaultOrganisation.json');
const defaultHomeView = require('../db/views.json');

const range = (start, end) => {
  const values = [];
  let current = start;
  while (current < end) {
    values.push(current);
    current += 1;
  }
  return values;
};
const today = new Date();

const generateOpenedQuestions = count => {
  const startDate = `${today.getFullYear() - 1}-${today.getMonth() +
    1}-${today.getDate()}T01:00:00.000Z`;
  const endDate = `${today.getFullYear() + 1}-${today.getMonth() +
    1}-${today.getDate()}T01:00:00.000Z`;

  return range(0, count).map(number => ({
    ...defaultQuestion,
    questionId: `question-${number}-id`,
    slug: `question-${number}-slug`,
    startDate,
    endDate,
    question: `question-${number} ${defaultQuestion.question} ?`,
    wording: {
      ...defaultQuestion.wording,
      title: `question-${number} ${defaultQuestion.wording.title}`,
      question: `question-${number} ${defaultQuestion.wording.question} ?`,
      description: `question-${number} ${defaultQuestion.wording.description}`,
    },
  }));
};

const generateProposals = (question, author, count) => {
  return range(0, count).map(number => ({
    ...defaultProposal,
    id: `proposal-${question.slug}-${number}-id`,
    slug: `proposal-${question.slug}-${number}-slug`,
    content: `proposal-${question.slug}-${number}-content`,
    question: {
      questionId: question.questionId,
      slug: question.slug,
      wording: {
        title: question.wording.title,
        question: question.wording.question,
      },
      startDate: question.startDate,
      endDate: question.endDate,
    },
    author: {
      ...defaultQuestion.author,
      ...author,
    },
  }));
};

const generatePartners = count => {
  return range(0, count).map(number => ({
    ...defaultPartner,
    organisationId: `partner-${number}-id`,
  }));
};

const generatePopularTags = count => {
  return range(0, count).map(number => ({
    ...defaultPopularTag,
    tagId: `popular-tag-${number}-id`,
  }));
};

const generateTags = count => {
  return range(0, count).map(number => ({
    ...defaultTag,
    tagId: `tag-${number}-id`,
    label: `tag-${number}-label`,
  }));
};

const generateOrganisations = count => {
  return range(0, count).map(number => ({
    ...defaultOrganisation,
    organisationId: `organisation-${number}-id`,
    organisationName: `organisation-${number}-name`,
    slug: `organisation-${number}-slug`,
  }));
};

const questions = generateOpenedQuestions(10);
const organisations = generateOrganisations(2);
const authorProposal = {
  organisationName: organisations[0].organisationName,
  organisationSlug: organisations[0].slug,
};
const proposals = questions
  .map(question => generateProposals(question, authorProposal, 22))
  .flat();
const partners = generatePartners(5);
const popularTags = generatePopularTags(4);
const tags = generateTags(4);

const generateHomeView = () => ({
  ...defaultHomeView.home,
  popularProposals: proposals.slice(0, 2),
  controverseProposals: proposals.slice(3, 5),
  featuredConsultations: defaultHomeView.home.featuredConsultations.map(
    featured => ({
      ...featured,
      questionId: questions[0].questionId,
      questionSlug: questions[0].slug,
    })
  ),
  currentConsultations: defaultHomeView.home.currentConsultations.map(
    current => ({
      ...current,
      questionId: questions[1].questionId,
      questionSlug: questions[1].slug,
    })
  ),
});
const homeView = generateHomeView();

const fixtures = {
  questions,
  proposals,
  partners,
  popularTags,
  tags,
  vote: defaultVote,
  homeView,
  organisations,
};

module.exports = { fixtures };
