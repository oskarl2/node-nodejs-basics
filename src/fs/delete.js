import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

  fs.rm(pathToRemove, (err) => {
    if (err?.code === 'ENOENT') {
      throw Error('FS operation failed');
    }
  });
};

await remove();
