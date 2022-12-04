import fs from 'fs';
import {fileURLToPath} from 'url'
import path from 'path'

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');

  const writableStream = fs.createWriteStream(pathToFile, 'utf8');

  process.stdin.on('data', (chunk) => {
    writableStream.write(chunk);
    writableStream.end();
  });
};

await write();
