### gulp-package-list


[入门指南](https://github.com/topchenxi/gulp-introduce/blob/master/mdFile/learn.md)

[快速入门(官方)](http://www.gulpjs.com.cn/docs/getting-started/)

[注意事项](https://github.com/topchenxi/gulp-introduce/blob/master/mdFile/mind.md)

列举一些常用的 gulp package

具体介绍可以进到官方页面[npm](https://www.npmjs.com/)进行搜索

#### 基础

`gulp-if` -- 逻辑判断

`gulp-imagemin` -- 压缩常见的图片格式

`gulp-uglify` -- 压缩 `javasricpt`

`gulp-csscomb` `cssnano`  -- 压缩 `css`

`gulp-concat` -- 合并文件

`gulp-autoprefixer` -- 给 `CSS` 增加前缀

`gulp-rename` -- 修改文件名称

`run-sequence` -- 同步运行任务插件

`del` `gulp-clean` -- 删除文件/文件夹

`gulp-jshint` -- `javasricpt` 代码检查

`gulp-sourcemaps` -- 处理 `JavaScript` `less` 时生成 `SourceMap`

`gulp-sass` -- 编译`sass`文件

`gulp-less` -- 编译`less`文件

`gulp-stylus` -- 编译`stylus`文件

`gulp-coffee` -- 编译`CoffeeScript`文件

`gulp-typescript` -- 编译`TypeScript`文件

`gulp-babel ` -- 编译`ES6`

#### 进阶

`gulp-flatten` -- 移动指定文件

`gulp-markdown` `gulp-html2md` -- 把 `Markdown` => `HTML`

`gulp-plumber` --  错误监听 可以阻止 `gulp` 插件发生错误导致进程退出并输出错误日志

`gulp-notify` -- 在控制台中加入文字描述,展示错误信息

`gulp-util` --  最基础的工具，打日志

`gulp-clean` && `gulp-copy` -- 移动复制文件

`gulp-rev` -- 文件版本 `name.js` => `name.24332.js`

`gulp-imagemin` && `gulp-tinypng` -- 图片压缩.

`imagemin-pngquant`  -- 压缩png图片的插件.

`gulp.spritesmith`  -- 合成sprite图片插件.

`gulp-base64`  -- 图片转换成Base64编码.

`browserify` -- 合并打包

`browser-sync` -- 起服务，自动刷新

`gulp-rev-collector` -- 给资源文件加时间戳(配合 `gulp-rev` 使用)

`gulp-uncss` -- 清理多余无用css

`gulp-changed` -- 只编译改动过的文件

`gulp-postcss` -- css 后处理器

`cssgrace` -- 生成兼容旧浏览器的各种 Hack(配合 `gulp-postcss` 使用)

`gulp-replace` -- 替换文件内容

`gulp-useref` -- js和css 资源进行合并输出(即html中js和css引入合并)


#### 参考文献

[gulp 中文网](http://www.gulpjs.com.cn/)
[gulp 资料](https://github.com/Platform-CUF/use-gulp)
[gulp 简体中文文档](https://github.com/lisposter/gulp-docs-zh-cn)
[gulp 常用插件](https://zhuanlan.zhihu.com/p/25243171)
[gulp awesome](https://github.com/alferov/awesome-gulp)
[gulp awesome cn](http://www.jianshu.com/p/df65ae89b862)