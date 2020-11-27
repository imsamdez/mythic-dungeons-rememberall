const {exec} = require('child_process');

const execPromised = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        return reject(stderr);
      }
      return resolve(stdout);
    });
  });
};

module.exports = {execPromised};
