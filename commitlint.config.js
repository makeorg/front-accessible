module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': () => [2, 'always', ['transverse', 'user', 'sequence', 'proposal', 'tracking']]
  }
};
