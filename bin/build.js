#!/usr/bin/env node

const { exec } = require("child_process");

const command = `
  cp ./.env ./node_modules/test-package/.env.copied
  cd ./node_modules/test-package &&
  npm install &&
  npx webpack --config ./webpack.config.js &&
  mkdir -p ../../views/test-package-build &&
  cp -r ./build-view ../../views/test-package-build/home/
`;

exec(command, (error, stdout, stderr) => {
	if (error) {
		console.error(`error: ${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`stderr: ${stderr}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
});
