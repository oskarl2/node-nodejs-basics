import fs from 'fs/promises';
import {fileURLToPath} from 'url';
import path from 'path';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFolder = path.join(__dirname, 'files');

  try {
    const files = await fs.readdir(pathToFolder);
    console.log(files);
  } catch (err) {
    throw Error('FS operation failed');
  }
};

await list();
