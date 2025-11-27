const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss') /*arquivos fontes*/
        .pipe(sass({ style: 'compressed'})) /*encadiar a compilação para os arquivos serem comprimidos*/
        .pipe(gulp.dest('./dist/css'));/*vamos enviar estes arquivos CSS já comprimidos para uma pasta*/
}

exports.default = styles;
exports.watch = function() {/*função para sempre atualizar as alterações do projeto*/
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}