var gulp = require('gulp');
// 编译less
var less = require('gulp-less');
// 给css3属性添加浏览器前缀插件
var autoprefixer = require('gulp-autoprefixer');
// 删除文件插件
var del = require('del');
// 同步运行任务插件
var runSequence = require('run-sequence');
// 压缩js插件
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
// 压缩图片插件
var imagemin = require('gulp-imagemin');
// 压缩png图片的插件
var pngquant = require('imagemin-pngquant');
// 合成sprite图片插件
var spritesmith = require('gulp.spritesmith');

// 清空数据
gulp.task('clean:dist', function() {
    return del.sync('dist');
});

// 编译less
gulp.task('buildCss', function() {
    gulp.src(['static/myProject/less/*.less', 'static/myProject/less/**/*.less'])
        .pipe(less())
        .pipe(gulp.dest('dist/myProject/css'))
});

// 压缩js插件
gulp.task('buildJs', function() {
    gulp.src(['static/myProject/js/**/*.js'])
        .pipe(gulpIf('*.js', uglify()))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist/myProject/js'));
});
// 图片压缩任务
gulp.task('buildImages', function() {
    gulp.src('static/myProject/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/myProject/images'));
});
// 合并sprite图任务
gulp.task('sprite', function() {
    var spriteData = gulp.src('static/myProject/images/sprite-images/*.png')
        .pipe(spritesmith({
            imgName: 'images/sprite-images/sprite.png',
            cssName: 'less/sprite-images/sprite.less',
            cssFormat: 'less',
            padding: 10
        }));
    return spriteData.pipe(gulp.dest('static/myProject'))
});
// 默认执行任务
gulp.task('default', function(callback) {
    runSequence([
        'clean:dist',
        'sprite',
        'buildCss',
        'buildJs',
        'buildImages'
    ], callback);
})