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

## 配置方式：

	//fis.conf
	fis.match('::package', {
		prepackager: fis.plugin('dot-compiler')
	});


# 组合使用方式

## 安装

	npm i fis3-parser-dot-compiler
	npm i fis3-prepackager-dot-compiler

## 配置

	//fis.conf
	fis.match('*.dot', {
		parser: fis.plugin('dot-compiler'),
		rExt: '.js'
	})

        fis.match('::package', {
                prepackager: fis.plugin('dot-compiler')
        });


## 引用

可以在js文件中引用，也可以在html中引用。
