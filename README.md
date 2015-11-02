# fis3-prepackager-dot-compiler
配合[fis3-parser-dot-compiler](https://github.com/coooold/fis3-parser-dot-compiler)完成模板文件收集打包功能
所有的dot模板将会合并到同目录的template.js文件中。

例如：

	/tmpl/a.dot
	/tmpl/b.dot
	/tmpl/c.dot

编译后会变成以下几个文件：


	/tmpl/a.js
	/tmpl/b.js
	/tmpl/c.js
	/tmpl/template.js

##配置方式：

	//fis.conf
	fis.match('::package', {
		prepackager: fis.plugin('dot-compiler')
	});


