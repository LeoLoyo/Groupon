var path = require('path')

module.exports = {
	context: __dirname,
	entry:path.resolve(__dirname, 'src', 'client.js'),
	output:{
		path:path.resolve(__dirname, 'public', 'js'),
		filename:'bundle.js'
	},
	module:{
		rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
    	query:{
			cacheDirectory: 'babel-cache',
			presets:['es2015','stage-2','react']
		}
      }]
	}
}