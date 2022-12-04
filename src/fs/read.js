import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

  fs.readFile(pathToFile, 'utf-8', (err, data) => {
    if (err) {
      throw Error('FS operation failed');
    }

    console.log(data);
  })
};

await read();
