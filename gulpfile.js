var gulp = require("gulp")
var postcss = require("gulp-postcss")
var browserSync = require ("browser-sync").create()
var cssnested = require("postcss-nested")
var mixins = require ("postcss-mixins")
var atImport = require("postcss-import")
var lost = require ("lost")
var csswring = require("csswring")
var rucksack = require("rucksack-css")
var cssnext = require("postcss-cssnext")


//servidor de desarrollo

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  })
})

//Procesar CSS
gulp.task("css", function () {
  var processors = [
    atImport(),
    mixins(),
    cssnested,
    lost(),
    rucksack(),
    cssnext({ browsers: ["> 5%", "ie 8"]}),
    csswring()
  ]

  return gulp.src("./src/invie.css")
  .pipe(postcss(processors))
  .pipe(gulp.dest("./dist/css"))
  .pipe(browserSync.stream())
})

//vigilar cambios

gulp.task("watch", function () {
  gulp.watch("./src/*.css", ["css"])
  gulp.watch("./dist/*.html").on("change", browserSync.reload)
})

//comando default

gulp.task("default",["watch", "serve"])