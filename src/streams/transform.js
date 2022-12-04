import {Transform} from 'stream';

const transform = async () => {
  const writableStream = process.stdout
  const readableStream = process.stdin

  const transform = new Transform({
    transform(chunk, _, cb) {
      this.push(chunk.toString().split('').reverse().join(''));
      cb();
    }
  });

  readableStream
    .pipe(transform)
    .pipe(writableStream);
};

await transform();
