const fs = require("fs");
const path = require("path");


function copyFileSync(source, target) {
	// Проверяем, существует ли файл .env в исходном пути
	if (!fs.existsSync(source)) {
		console.error(`Файл .env не найден в исходной директории: ${source}`);
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
const appEnvFilePath = path.resolve(__dirname, "../../../.env"); // Путь к файлу .env в родительском приложении
const packageEnvFilePath = path.resolve(__dirname, "./.env"); // Путь к директории npm пакета

copyFileSync(appEnvFilePath, packageEnvFilePath);
