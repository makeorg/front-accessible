const path = require('path');

module.exports = {
  version: '1.1.0',
  template: {
    favicon: '/images/favicon.ico',
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide.wrapper'),
  },
  sections: [
    {
      name: 'Installation',
      content: 'docs/installation.md',
      description: 'How to install Make.org Front End & useful command lines',
    },
    {
      name: 'Standards',
      content: 'docs/standards.md',
      description: 'Code standards used on Make.org Front End',
    },
    {
      name: 'Editors',
      content: 'docs/editors.md',
    },
    {
      name: 'Sequence',
      content: 'docs/sequence.md',
    },
    {
      name: 'Colors',
      content: 'docs/colors.md',
    },
    {
      name: 'UI',
      description: 'UI',
      components: 'client/ui/**/index.js',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Features',
      description: 'Features',
      components: [
        'client/features/proposal/SingleProposalCard/index.js',
        'client/features/proposal/ProposalCardTagged/index.js',
        'client/features/proposal/PopularProposalCard/index.js',
        'client/features/proposal/ProfileProposalCard/index.js',
        'client/features/proposal/ProfileVoteCard/index.js',
        'client/features/proposal/ProposalCardWithQuestion/index.js',
        'client/features/SelectPanel/index.js',
      ],
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  pagePerSection: true,
  ignore: [
    'client/ui/**/Styled/*.js',
    'client/ui/Cards/index.js',
    'client/ui/Data/PieChart/Build/index.js',
    'client/ui/Elements/Buttons/style.js',
    'client/ui/Proposal/DetailledVoteResults/Item/index.js',
    'client/ui/Elements/Form/PasswordInput/Button/index.js',
  ],
  ribbon: {
    url: 'https://gitlab.com/makeorg/platform/front-accessible',
    text: 'Fork me on GitLab',
  },
  theme: {
    color: {
      baseBackground: 'rgb(255, 255, 255)',
      sidebarBackground: 'rgb(242, 242, 242)',
      ribbonBackground: 'rgb(232, 24, 68)',
      ribbonText: 'rgb(255, 255, 255)',
      border: 'rgba(0, 0, 0, 0.2)',
      base: 'rgb(0, 0, 0)',
      light: 'rgb(51, 51, 51)',
      lightest: 'rgb(118,118,118)',
      link: 'rgb(37, 49, 134)',
      linkHover: 'rgb(232, 24, 68)',
      name: 'rgb(37, 49, 134)',
      type: 'rgb(232, 24, 68)',
      error: 'rgb(232, 24, 68)',
      codeComment: '#6d6d6d',
      codePunctuation: '#999',
      codeProperty: '#905',
      codeDeleted: '#905',
      codeString: '#690',
      codeInserted: '#690',
      codeOperator: '#9a6e3a',
      codeKeyword: '#1673b1',
      codeFunction: '#DD4A68',
      codeVariable: '#e90',
    },
    fontFamily: {
      base: '"Helvetica Neue", "Roboto", sans-serif',
    },
    sidebarWidth: 300,
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          loader: 'babel-loader',
        },
        {
          test: /\.(jpe?g|woff|woff2|tiff|gif|png|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
            },
          },
        },
      ],
    },
  },
};
