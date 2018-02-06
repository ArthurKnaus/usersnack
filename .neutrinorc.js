module.exports = {
  use: [
    ['@neutrinojs/airbnb', {
      eslint: {
        rules: {
          'linebreak-style': 'off',
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
