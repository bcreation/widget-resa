const HtmlWebpackPlugin = require('html-webpack-plugin');
const widgetGATPlugin = require('./widget-plugin.js');

if (process.env.NODE_ENV === 'production') {
	module.exports = {
		productionSourceMap: true
	};
} else if (process.env.NODE_ENV === 'production-widget') {
	module.exports = {
		productionSourceMap: false,
		chainWebpack: (config) => {
			config.plugins.delete('html');
			config.plugins.delete('preload');
			config.plugins.delete('prefetch');
		},
		configureWebpack: {
			plugins: [
				new HtmlWebpackPlugin({ template: './src/assets/template/widget.html', inject: false }),
				new widgetGATPlugin()
			]
		}
	};
}
