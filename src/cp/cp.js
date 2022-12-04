import {spawn} from 'child_process';
import path from 'path';
import {fileURLToPath} from 'url';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname, 'files', 'script.js');

  const childProcess = spawn('node' ,[pathToFile, ...args]  )

  childProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stdin.on('data', data => {
    childProcess.stdin.write(data)
  });

  childProcess.stderr.on('data',(data) => {
    console.log(`stderr: ${data}`);
  });

  childProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

spawnChildProcess(process.argv.slice(2));
