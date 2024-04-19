#!/usr/bin/env node

const webpack = require("webpack");
const config = require("../webpack.config.js");

// Создаем компилятор webpack с конфигурацией из файла webpack.config.js
const compiler = webpack(config);

// Запускаем компиляцию
compiler.run((err, stats) => {
	if (err) {
		console.error(err.stack || err);
		if (err.details) {
			console.error(err.details);
		}
		return;
	}

	const info = stats.toJson();

	if (stats.hasErrors()) {
		console.error(info.errors);
	}

	if (stats.hasWarnings()) {
		console.warn(info.warnings);
	}

	console.log("Webpack успешно завершил работу.");
});
