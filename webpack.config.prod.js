import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	debug: true,
	devtool: 'source-map',
	noInfo:  false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		// minify js
		new webpack.optimize.UglifyJsPlugin(),

		// eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		// Create HTML file that includes reference to bundled JS
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true
			},
			inject: true
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['style', 'css']}
		]
	}
}
