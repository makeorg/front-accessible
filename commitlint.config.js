module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': () => [
      2,
      'always',
      [
        'consultation',
        'profile',
        'transverse',
        'user',
        'sequence',
        'proposal',
        'tracking',
        'homepage',
        'ui',
        'a11y',
      ],
    ],
  },
};
