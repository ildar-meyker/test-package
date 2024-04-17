const fs = require("fs");
const path = require("path");


function copyFileSync(source, target) {
	// Проверяем, существует ли файл .env в исходном пути
	if (!fs.existsSync(source)) {
		console.log(`test-package: Файл .env не найден в приложении. Будет использован .env файла пакета.`);
		return;
	}

	try {
		// Копируем файл .env
		fs.copyFileSync(source, target);
		console.log(`test-package: Файл .env успешно скопирован в пакет.`);
	} catch (error) {
		console.error("test-package: Ошибка при копировании файла .env:", error);
	}
}

// Использование:
const sourceEnvFilePath = path.resolve(__dirname, "../../../.env"); 
const targetEnvFilePath = path.resolve(__dirname, "../.env"); 

copyFileSync(sourceEnvFilePath, targetEnvFilePath);
