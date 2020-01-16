module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': () => [
      2,
      'always',
      [
        'top idea',
        'consultation',
        'profile',
        'transverse',
        'user',
        'sequence',
        'proposal',
        'tracking',
        'homepage',
        'search',
        'ui',
        'a11y',
      ],
    ],
  },
};
