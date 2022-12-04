const parseArgs = () => {
  for (let i = 2; i < process.argv.length; i++) {
    console.log(`${process.argv[i]} is ${process.argv[i + 1]}`);
    i++;
  }
};

parseArgs();
