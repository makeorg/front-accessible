module.exports = {
  version: '1.1.0',
  template: {
    favicon: '/images/favicon.ico'
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Installation & Commands',
      content: 'docs/installation.md',
      description: 'How to install Make.org Front End & useful command lines'
    },
    {
      name: 'Containers',
      description: 'Containers are used to manage React Elements business logic',
      components: 'src/containers/**/index.js',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Components',
      description: 'Components are used to render React Elements',
      components: 'src/components/**/index.js',
      exampleMode: 'hide', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ],
  pagePerSection: true,
  ignore: ['src/components/**/Styled/*.js', 'src/components/Elements/**/*.js'],
  ribbon: {
    url: 'https://gitlab.com/makeorg/platform/front-accessible',
    text: 'Fork me on GitLab'
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
      error: 'rgb(232, 24, 68)'
    },
    fontFamily: {
      base: '"Helvetica Neue", "Roboto", sans-serif'
    },
    sidebarWidth: 300
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/],
          loader: 'babel-loader'
        }, {
          test: /\.(jpe?g|woff|woff2|tiff|gif|png|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]'
            }
          }
        }
      ]
    }
  }
};
