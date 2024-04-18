const fs = require("fs");
const path = require("path");

const package = require('../package.json');


function copyFileSync(source, target) {
	// Проверяем, существует ли файл .env в исходном пути
	if (!fs.existsSync(source)) {
		console.log(`${package.name}: Файл .env не найден в приложении. Будет использован .env файла пакета.`);
		return;
	}

	try {
		// Копируем файл .env
		fs.copyFileSync(source, target);
		console.log(`${package.name}: Файл .env успешно скопирован в пакет.`);
	} catch (error) {
		console.error(`${package.name}: Ошибка при копировании файла .env:`, error);
	}
}

// Использование:
const sourceFilePath = path.resolve(__dirname, "../../../.env"); 
const targetFilePath = path.resolve(__dirname, "../.env"); 

copyFileSync(sourceFilePath, targetFilePath);
