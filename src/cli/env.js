const parseEnv = () => {
  Object.keys(process.env).forEach(key => {
    if (key.match('RSS_')) {
      console.log(`${key}=${process.env[key]}`);
    }
  });
};

parseEnv();
