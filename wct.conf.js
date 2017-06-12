module.exports = {
  verbose: false,
  persistent: false,
  clientOptions: {
    global: 'bower_components'
  },
  plugins: {
    local: {
      browsers: ['chrome']
    },
    istanbul: {
      dir: './public/coverage',
      reporters: ['text-summary', 'lcov'],
      include: [
        '/public/elements/**/*.html'
      ],
      exclude: []
    }
  },
  suites: [
    'test/index.html'
  ]
};
