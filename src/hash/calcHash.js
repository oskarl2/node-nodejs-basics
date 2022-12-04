import fs from 'fs';
import crypto from 'crypto';
import {fileURLToPath} from 'url';
import path from 'path';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const file = fs.readFileSync(pathToFile);
  const hashSum = crypto
    .createHash('sha256')
    .update(file)
    .digest('hex');

  console.log(hashSum);
};

await calculateHash();
