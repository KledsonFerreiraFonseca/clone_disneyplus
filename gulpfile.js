/*importar pacotes*/
const gulp = require('gulp');/*gulp*/
const sass = require('gulp-sass')(require('sass'));/*sass*/
const imagemin = require('gulp-imagemin'); /*plugin de images*/
const uglify = require('gulp-uglify'); /*plugin de js*/

/*função scripts*/
function scripts(){
    return gulp.src('./src/scripts/*.js') /*arquivos fontes*/
        .pipe(uglify()) /*encadiar a compressão dos arquivos JS*/
        .pipe(gulp.dest('./dist/js'));/*pasta de destino para os arquivos comprimidos*/
}

/*função styles*/
function styles(){
    return gulp.src('./src/styles/*.scss') /*arquivos fontes*/
        .pipe(sass({ style: 'compressed'})) /*encadiar a compilação para os arquivos serem comprimidos*/
        .pipe(gulp.dest('./dist/css'));/*vamos enviar estes arquivos CSS já comprimidos para uma pasta*/
}

/*função images*/
function images(){
    return gulp.src('./src/images/**/*') /*qualquer pastaque esteja dentro de "images"*/
        .pipe(imagemin()) /*execução do imagemin*/
        .pipe(gulp.dest('./dist/images'));/*pasta de destino para comprimir*/
}

/*exportar funções*/
exports.default = gulp.parallel(styles, images, scripts);/*para executar o sistema em paralelo*/

exports.watch = function() {/*função para sempre atualizar as alterações do projeto*/
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))/*observar alterações nos arquivos SCSS*/
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))/*observar alterações nos arquivos JS*/
}