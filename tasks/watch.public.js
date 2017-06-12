'use strict';

// -------------------------------------
//   Task: Watch: Public
// -------------------------------------

module.exports = function(gulp) {
  return function() {
    gulp.watch(['public/elements/**/*.scss', 'public/*.scss'], ['compile:sass']);
  };
};
