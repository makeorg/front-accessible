module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': () => [2, 'always', ['profile', 'transverse', 'user', 'sequence', 'proposal', 'tracking']]
  }
};
