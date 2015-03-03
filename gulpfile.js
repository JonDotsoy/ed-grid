// incluir los paquetes requeridos.
var gulp      = require("gulp");
var stylus    = require("gulp-stylus");
var minifyCss = require('gulp-minify-css');

// incluir, si se desea trabajar con sourcemaps.
var sourcemaps = require("gulp-sourcemaps");


// Tareas para stylus
gulp.task('stylus', function(){
  gulp.src('./stylus/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

// Minifica el codigo CSS
gulp.task('minify-css', function(){
  gulp.src('./css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest("./dist"));
});

// Prosesa tras cualquier cambio
gulp.task('watch', function(){
  gulp.watch('./stylus/*.styl', ['stylus','minify-css']);
});


// Tarea por defecto para arrancar tras usar el comando gulp
gulp.task('default', ['stylus','minify-css']);
