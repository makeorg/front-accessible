const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: ['last 2 versions', 'IE >= 11'],
      },
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  '@babel/preset-react',
  '@babel/preset-flow',
];

const plugins = [
  'convert-to-json',
  '@babel/plugin-proposal-optional-chaining',
  '@loadable/babel-plugin',
  '@babel/plugin-proposal-class-properties',
  [
    'babel-plugin-styled-components',
    {
      pure: true,
      displayName: false,
    },
  ],
  [
    'module-resolver',
    {
      alias: {
        Client: './client',
        Shared: './shared',
        Server: './server',
      },
    },
  ],
];

// instrument code for coverage
if (process.env.NODE_ENV === 'ci') {
  plugins.push('istanbul');
}

module.exports = {
  presets,
  plugins,
};
