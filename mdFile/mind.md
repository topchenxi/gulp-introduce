### gulp 使用的注意事项

#### 了解node中文件路径配置

gulp内建的`.src` `.dest` `.watch`等方法，传入的文件路径的解析是通过glob这个模块处理的，所以可以先去了解下这个路径字串格式的配置方法，这样子对自由组织选取文件操作很有帮助。

例如想要通过文件名排除某些文件的时候，就可以这样：

```javascript
gulp.src('css/**/!(_)*'); //排除以_开头的文件
```

####  watch方法路径不要用 './xx'

用 `./xx` 开头作为当前路径开始，会导致无法监测到新增文件，所以直接省略掉 `./` 即可。`./images/*` === `images/*`

#### .watch使用change事件来同步删除情况

当输出文件夹里的对应文件却没有相应的自动删除，通过change事件来检测删除情况

```javascript
var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
```

#### 使用gulp-changed来过滤变动的文件

```javascript
var gulp = require('gulp');
var changed = require('gulp-changed');
var ngmin = require('gulp-ngmin'); // just as an example 
 
var SRC = 'src/*.js';
var DEST = 'dist';
 
gulp.task('default', function () {
    return gulp.src(SRC)
        .pipe(changed(DEST))
        // ngmin will only get the files that 
        // changed since the last time it was run 
        .pipe(ngmin())
        .pipe(gulp.dest(DEST));
});
```


#### 使用gulp-plumber来捕获处理任务中的错误

在gulp的管道流任务处理中，如果某个环节出了错，会导致整个任务中断，包括watch任务，这很麻烦。所以gulp-plumber来了。

```javascript
var plumber = require('gulp-plumber');
var less= require('gulp-less');
 
gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./dist'));
```

#### 多个合并文件任务的处理方法

简单的项目中可能只需要合并处理一个js、css文件，但是复杂项目中需要合并处理的文件可能不止一个。css好说，好多合并插件都可以处理 @import ，而js该怎么处理呢？

1.写死任务，有几个合并需求就在gulpfile.js里配置几个任务。我讨厌这种方法。

2.将js合并的配置写到package.json里