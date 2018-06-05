//加载gulp模块
var gulp = require('gulp');
//加载browser-sync模块
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
//加载sass模块
var sass = require('gulp-sass');
//加载pug模块
var pug = require('gulp-pug');
//加载gulp-autoprefixer模块
var autoprefixer = require('gulp-autoprefixer');


/**
 * 这里静态服务器 + 监听 scss/pug/js 文件
 */
gulp.task('server',['sass','pug'],function(){
    browserSync.init({
        server:'./', //这里指的是根目录，如果你的index.html在根目录下，会直接打开index页面，不然会显示Get Not，自己写路径就行
        port:8081  //默认打开localhost:3000,现在改成localhost:8081
    });

    //监听 scss/pug/js 文件
    gulp.watch('sass/*.scss',['sass']);
    gulp.watch('jade/*.pug',['pug']);
    gulp.watch('*.html').on('change',reload);
});

/**
 * 编译sass
 */
gulp.task('sass',function(){
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./sass'))
        .pipe(reload({stream:true}));
});

/**
 * 编译pug
 */
gulp.task('pug',function(){
    return gulp.src('jade/*.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('./'))
        .pipe(reload({stream:true}));
});
/**
 * 默认运行
 */
gulp.task('default',['server']);


/**
 * 代理服务器 + 监听 scss/pug/js 文件
 */
// gulp.task('server',['sass','pug'],function(){
//     browserSync.init({
//         proxy:'http://localhost:8081/court-digital-library-search/page/portal/portalHomepage.html',
//         port:8083
//     });
//     gulp.watch('sass/**/*.scss',['sass']);
//     gulp.watch('jade/**/*.pug',['pug']);
//     gulp.watch(['page/**/*.js','lar-ui/**/*.js']).on('change',reload);
// });