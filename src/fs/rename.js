import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pathToWrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
  const pathToProperFile = path.join(__dirname, 'files', 'properFilename.md');

  if (fs.existsSync(pathToProperFile)) {
    throw Error('FS operation failed');
  } else {
    fs.rename(pathToWrongFile, pathToProperFile, (err) =>{
      if (err?.code === 'ENOENT') {
        throw Error('FS operation failed');
      }
    });
  }
};

await rename();
