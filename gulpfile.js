let gulp = require("gulp"),
    sass = require("gulp-sass"),
    jade = require('gulp-jade'),
    browserSync = require("browser-sync").create(),
    reload = browserSync.reload,
    pug = require('gulp-pug');


gulp.task('browser-sync',['sass','pug'],()=>{
    let files = [
            'sass/*.scss',
            'css/*.css',
            'jade/*.pug',
            'js/*.js',
            '*.html',
            'html/*.html'
        ];
    browserSync.init({
        files:[
            'sass/*.scss',
            'css/*.css',
            'jade/*.pug',
            'js/*.js',
            '*.html',
            'html/*.html'
        ],
        server:{
            baseDir:'./',

        },
        port:3000
    });
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch('jade/*.pug',['pug']);
    gulp.watch(files).on('change', reload);
});


gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(reload({stream: true}));
});
gulp.task('pug',function(){
    return gulp.src('jade/*.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('./html'))
        .pipe(reload({stream:true}));
});

 gulp.task('default',['browser-sync']);
