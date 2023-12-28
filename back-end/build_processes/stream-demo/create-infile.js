const { exec } = require("child_process");
exec('echo "Mary had a little lamb 2" > input.txt', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

/*
// Can be promisified like:

function execShellCommand(cmd) {
  const exec = require("child_process").exec;
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      } else if (stdout) {
        console.log(stdout); 
      } else {
        console.log(stderr);
      }
      resolve(stdout ? true : false);
    });
  });
}

 */
