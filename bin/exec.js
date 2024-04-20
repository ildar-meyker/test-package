#!/usr/bin/env node

const { exec } = require("child_process");

const command = `
  cd ./node_modules/test-package &&
  npm install &&
  npx webpack --config ./webpack.config.js &&
  mkdir -p ../../views/test-package-build &&
  cp -r ./build-view ../../views/test-package-build/home/
`;

exec(command, (error, stdout, stderr) => {
	if (error) {
		console.error(`Ошибка: ${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`Ошибка вывода: ${stderr}`);
		return;
	}
	console.log(`Результат: ${stdout}`);
});
