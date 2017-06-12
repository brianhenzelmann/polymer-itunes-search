'use strict';

// -------------------------------------
//   Task: Serve
// -------------------------------------
const nodemon = require('gulp-nodemon');

module.exports = function() {
  return function() {
    nodemon({
        script: 'server/app.js',
        env: { 'base_directory' : '/../dist/public'}
      })
      .on('restart', function() {
        console.log('server restarted');
      });
  };
};
