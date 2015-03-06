var clitoolkit = require('clitoolkit');
var path = require('path');
var fs = require('fs');

/**
 * initial the command line
 * @param  {Process} pro the process project
 * @return {void}
 */
var _run = function(pro){
    //get package configuration
    var configContent = fs.readFileSync(path.join(__dirname, '..', 'package.json'), {
        encoding: 'utf8'
    });
    var config = JSON.parse(configContent);
    var deps = config.dependencies;

    //find out the sherrie plugins
    var plugins = [];
    for (var dep in deps) {
        if (deps.hasOwnProperty(dep) && /^sherrie\-cmd\-/.test(dep)) {
            plugins.push(dep);
        }
    }

    //initial other command line tools
    clitoolkit.init({
        version: config.version,
        plugin: plugins
    }, pro.argv);
};

module.exports = {
    run: _run
};