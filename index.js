/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author @erdii
*/

const loaderUtils = require("loader-utils");

module.exports = function(source, map) {
	this.cacheable(true);
	const options = loaderUtils.getOptions(this) || {};

	this.callback(null, source, options.sourceMap ? map : undefined);
};