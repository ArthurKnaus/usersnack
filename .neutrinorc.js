module.exports = {
  use: [
    ['@neutrinojs/airbnb', {
      eslint: {
        rules: {
          'linebreak-style': 'off',
          'react/forbid-prop-types': 'off',
        }
      }
    }],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Usersnack'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};
