const path = require('path');
const fs = require('fs');
class widgetGATPlugin {
	constructor(options) {
		this.options = options;
	}
	/**
 * Plugin of build compiler to create a single code file
 * 
 * @param {*} compiler
 * @memberof widgetGATPlugin
 */
	apply(compiler) {
		compiler.hooks.emit.tapAsync('widgetGATPlugin', (compilation, callback) => {
			// minify the html template
			var htmlBase = compilation.assets['index.html'].source().replace(/(\s){2,}/gm, '');

			// Loop through all compiled assets,
			// create each assets in html syntax
			for (var filename in compilation.assets) {
				if (filename.indexOf('html') === -1 && filename.indexOf('ico') === -1) {
					if (filename.indexOf('js') === -1 && filename.indexOf('css') !== -1) {
						htmlBase += '<style>' + compilation.assets[filename].source() + '</style>';
					} else {
						htmlBase += '<script>' + compilation.assets[filename].source() + '</script>';
					}
				}
			}
			// add all assets in html file
			compilation.assets['index.html'] = {
				source() {
					return htmlBase;
				},
				size() {
					return htmlBase.length;
				}
			};
			callback();
		});
		compiler.hooks.afterEmit.tap('widgetGATPlugin', (compilation) => {
			// Loop through all compiled assets,
			// delete the assets files
			for (var filename in compilation.assets) {
				let assetDir = path.dirname(compilation.assets[filename].existsAt);
				if (filename.indexOf('html') === -1) {
					fs.unlinkSync(compilation.assets[filename].existsAt);
				}
				let filesNode = fs.readdirSync(assetDir);
				if (filesNode.length === 0) {
					fs.rmdirSync(assetDir);
				}
			}
		});
	}
}

module.exports = widgetGATPlugin;
