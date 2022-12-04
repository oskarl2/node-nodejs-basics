import fs from 'fs';
import zlib from 'zlib';
import {fileURLToPath} from 'url';
import path from 'path';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
  const pathToArchive = path.join(__dirname, 'files', 'archive.gz');

  const readableStream = fs.createReadStream(pathToArchive);
  const writableStream = fs.createWriteStream(pathToFile);
  const gunzip = zlib.createGunzip();

  readableStream
    .pipe(gunzip)
    .pipe(writableStream);
};

await decompress();
