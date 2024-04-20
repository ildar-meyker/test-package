#!/usr/bin/env node

const { exec } = require("child_process");

// Команды для выполнения
const commands = [
	"cd ./node_modules/test-package",
	"npm install",
	"npx webpack --config ./webpack.config.js",
	"mkdir -p ../../views/test-package-build",
	"cp -r ./build-view ../../views/test-package-build/home/",
];

// Функция для последовательного выполнения команд
function executeCommands(index) {
	if (index >= commands.length) {
		console.log("Все команды выполнены успешно!");
		return;
	}

	const command = commands[index];
	console.log(`Выполнение команды: ${command}`);

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

		// Переход к следующей команде
		executeCommands(index + 1);
	});
}

// Начало выполнения команд
executeCommands(0);
