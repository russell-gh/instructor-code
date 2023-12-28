// const { exec } = require("child_process");

exec(process.env.HOMEPATH + " mkdir new", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// exec reset each time to the original location

console.log(process.env);

//better

const { exec } = require("child_process");

function runCommand(command) {
  console.log(process.env);
  exec(
    "cd " + process.env.LOCALAPPDATA + "&& mkdir russell_here",
    (error, stdout, stderr) => {
      if (error) console.log(error);
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
    }
  );
}

for (let index = 0; index < 5; index++) {
  runCommand(`mkdir folder_no_${index}`);
}
