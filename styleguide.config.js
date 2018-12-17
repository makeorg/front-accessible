module.exports = {
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
