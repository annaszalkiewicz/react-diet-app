const gulp = require('gulp');
const shell = require('gulp-shell');
const image = require('gulp-image');

const optimizeImages = () => {
  return gulp
    .src(["./src/img/*"], { base: "./" })
    .pipe(image())
    .pipe(gulp.dest("./"));
}

const build = shell.task("npm run build");

const build_project = gulp.series(optimizeImages, build)

exports.build_project = build_project;

