var path = require('path');
var gulp = require("gulp");
var gutil = require("gulp-util");
var fse = require('fs-extra');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var WebpackConfig = require("./webpack.config.js");

//dev
gulp.task("build-dev", ["webpack:build-dev", "webpack-dev-server"], function(){
    gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});

//build dev
var devConfig = Object.create(WebpackConfig);
    devConfig.devtool = 'sourcemap';
    devConfig.debug = true;

gulp.task("webpack:build-dev", function(callback) {
   
    var compiler = webpack(devConfig);
    // run webpack
    compiler.run(function(err, stats){
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
            color: true
        }));
        fse.copySync('src/index.html', 'dist/index.html');
        fse.copySync('src/page', 'dist/page');
        callback();
    });
    
});

//Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(WebpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
        
		callback();
	});
});

//webpack dev server
gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var serverConfig = Object.create(WebpackConfig);
        serverConfig.devtool = '#source-map';
        serverConfig.debug = true;
        serverConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server");
        serverConfig.plugins = serverConfig.plugins.concat(
            new webpack.HotModuleReplacementPlugin()
        )
    var compiler = webpack(serverConfig);
        
    new WebpackDevServer(compiler, {
        contentBase: serverConfig.output.contentBase, 
        hot: true,
        // 设置代理
        // proxy: {
        //     '/some/path*': {
        //         target: 'https://other-server.example.com',
        //     },
        // },
        stats: {
            color: true
        }
    }).listen(8080, function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        callback();
    });
});