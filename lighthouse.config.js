const preferences = {
  baseUrl: 'http://localhost:9009',
  accessibility: 100,
  performance: 10,
  bestPractices: 10,
  seo: 90,
  pwa: 0,
  reportsDir: 'reports/lighthouse',
  reportPrefix: 'report',
  chromeFlags: '--headless --no-sandbox',
};

const pages = [
  { name: 'home', path: '/FR' },
  { name: 'sequence', path: '/FR/consultation/question-0-slug/selection' },
  {
    name: 'proposal',
    path:
      '/FR/consultation/question-0-slug/proposal/proposal-question-0-slug-0-id/proposal-question-0-slug-0-slug',
  },
  {
    name: 'consultation',
    path: '/FR/consultation/question-0-slug/participate',
  },
  {
    name: 'explore',
    path: '/FR/consultation/question-0-slug/explore/page/1',
  },
  {
    name: 'accessibility',
    path: '/FR/declaration-accessibilite',
  },
];

exports.configuration = { preferences, pages };
