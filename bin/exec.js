#!/usr/bin/env node

const { exec } = require("child_process");

exec(
	"cd ./node_modules/test-package && npm install && npx webpack --config ./webpack.config.js && mkdir ../../view/test-package-build &&  cp -r ./build-view ../../view/test-package-build/home/",
	(error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	}
);
