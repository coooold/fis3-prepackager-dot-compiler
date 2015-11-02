/**
 * doT template compiler
 * @author fang 2015年10月30日12:00:18
 */
'use strict';
module.exports = function(ret, conf, settings, opt) {
    var ids = ret.ids || {};
    fis.util.map(ids, function (src, file) {
        if (file.isDotTemplate) {
        	var subpath = getCompactTemplateJsSubPath(file);
        	conf[subpath] = conf[subpath] || [];
        	conf[subpath].push(file.subpath);
        }
    });
}


function getCompactTemplateJsSubPath(file){
	var path = file.subpath.replace('\\','/').split('/');
	path.pop();
	return path.join('/')+'/template.js';
}