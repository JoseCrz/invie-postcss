var gulp = require("gulp")
var postcss = require("gulp-postcss")
var browserSync = require ("browser-sync").create()
var autoprefixer = require("autoprefixer")

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
    autoprefixer({ browsers: ["> 5%", "ie 8"]})
  ]

  return gulp.src("./src/*.css")
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