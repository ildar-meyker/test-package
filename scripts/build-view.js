#!/usr/bin/env node

const webpack = require("webpack");
const webpackConfig = require("../webpack.config");

webpack(webpackConfig, (err, stats) => {
	if (err || stats.hasErrors()) {
		console.error(err);
	}
	// Done processing
});
