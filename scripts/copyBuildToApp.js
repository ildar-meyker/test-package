const fs = require("fs");
const path = require("path");

const package = require("../package.json");

function copyDirSync(source, target) {
	// Создаем целевую директорию, если она не существует
	if (!fs.existsSync(target)) {
		fs.mkdirSync(target, { recursive: true });
	}

	// Получаем список файлов и поддиректорий в исходной директории
	const files = fs.readdirSync(source);

	// Для каждого элемента в списке
	files.forEach((file) => {
		// Получаем пути исходного и целевого файлов/директорий
		const srcPath = path.join(source, file);
		const tgtPath = path.join(target, file);

		// Получаем информацию об элементе
		const stat = fs.statSync(srcPath);

		// Если элемент является файлом - копируем его
		if (stat.isFile()) {
			fs.copyFileSync(srcPath, tgtPath);
		}
		// Если элемент является директорией - рекурсивно копируем её
		else if (stat.isDirectory()) {
			copyDirSync(srcPath, tgtPath);
		}
	});
}

// Использование:
const sourceDirPath = path.resolve(__dirname, "../build-view");
const targetDirPath = path.resolve(
	__dirname,
	`../../../views/${package.name}-build/home/`
);

copyDirSync(sourceDirPath, targetDirPath);
