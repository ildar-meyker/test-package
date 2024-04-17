const fs = require("fs");
const path = require("path");


function copyFileSync(source, target) {
	// Проверяем, существует ли файл .env в исходном пути
	if (!fs.existsSync(source)) {
		console.log(`Файл .env не найден в исходной директории: ${source}`);
		return;
	}

	try {
		// Копируем файл .env
		fs.copyFileSync(source, target);
		console.log(`Файл .env успешно скопирован в пакет: post-editor`);
	} catch (error) {
		console.error("Ошибка при копировании файла .env:", error);
	}
}

// Использование:
const sourceEnvFilePath = path.resolve(__dirname, "../../../.env"); 
const targetEnvFilePath = path.resolve(__dirname, "../.env"); 

copyFileSync(sourceEnvFilePath, targetEnvFilePath);
