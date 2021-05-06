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
    'subject-case': () => [
      2,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case', // Start Case
      ],
    ],
  },
};
