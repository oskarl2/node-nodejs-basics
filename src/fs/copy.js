import fs, {existsSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourceFolderPath = path.join(__dirname, 'files');
  const destinationFolderPath = path.join(__dirname, 'files_copy');

  if (existsSync(destinationFolderPath) || !existsSync(sourceFolderPath)) {
    throw Error('FS operation failed');
  } else {
    fs.mkdirSync(destinationFolderPath, { recursive: true });

    fs.readdirSync(sourceFolderPath).forEach((entry) => {
      fs.copyFileSync(
        path.join(sourceFolderPath, entry),
        path.join(destinationFolderPath, entry)
      );
    });
  }
}

copy()
