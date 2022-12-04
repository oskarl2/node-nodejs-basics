import fs from 'fs'
import {fileURLToPath} from 'url'
import path from 'path';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

  const readableStream = fs.createReadStream(pathToFile, 'utf8');

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
