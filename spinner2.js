const spinArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

const spinner = (arry) => {
  for (let i = 0; i < arry.length; i++) {
    setTimeout(() => {
      process.stdout.write(arry[i]);
    }, i * 100);
  };
  return
};

spinner(spinArr);