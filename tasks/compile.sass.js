'use strict';

// -------------------------------------
//   Task: Compile: Sass
// -------------------------------------
const stylemod = require('gulp-style-modules');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');
const importOnce = require('node-sass-import-once');

var getName = (file) => {
  return path.basename(file.path, path.extname(file.path));
};

var styleModuleDest = (file) => {
  return file.base;
};

module.exports = (gulp, plugins) => {
  return () => {
    return gulp.src([
      './public/*.scss',
      './public/elements/*.scss',
      './public/elements/**/*.scss'
    ])
    .pipe(plugins.sass({
      includePaths: './public/bower_components/',
      importer: importOnce,
      importOnce: {
        index: true,
        bower: true
      }
    }).on('error', plugins.sass.logError))
    .pipe(autoprefixer())
    .pipe(stylemod({
      // All files will be named '-styles.html'
      filename: (file) => {
        var name = getName(file) + '-styles';
        return name;
      },
      moduleId: (file) => {
        return getName(file) + '-styles';
      }
    }))
    .pipe(gulp.dest(styleModuleDest));
  };
};
