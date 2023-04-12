const spinner = "\r|   \r/    \r-    \r\\    \r-    \r|   ";

const startSpinner = (spinner) => {
  let timeout = 0;
  for (const character of spinner) {
    timeout += 50; //changing to 50 cz it looks better
    setTimeout(() => {
      process.stdout.write(character);
    }, timeout);
  }
};

console.log(startSpinner(spinner));

