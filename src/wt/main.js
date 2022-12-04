import {Worker} from 'worker_threads';
import os from 'os';
import {fileURLToPath} from 'url';
import path from 'path';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'worker.js');

  const runWorker = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(pathToFile, {workerData});

      worker.on('message', res => {
        resolve({
          value: res,
          status: 'resolved'
        });
      });
      worker.on('error', () => {
        reject({
          value: null,
          status: 'error'
        });
      });
    });
  };

  const cpus = os.cpus();
  let num = 9;

  const workersResult = await Promise.allSettled(
    cpus.map(async (_, index) => {
      num++;

      return await runWorker(num);
    })
  );

  console.log(
    workersResult.map(item => ({...(item.value || item.reason)}))
  );
};

await performCalculations();
