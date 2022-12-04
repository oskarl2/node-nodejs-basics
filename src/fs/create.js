import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

  if (fs.existsSync(pathToFile)) {
    throw Error('FS operation failed');
  } else {
    fs.appendFile(pathToFile, 'I am fresh and young', (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

await create();
