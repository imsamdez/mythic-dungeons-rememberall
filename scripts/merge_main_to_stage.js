const {execPromised} = require('./helpers');
const commands = [
  'git checkout stage',
  'git pull',
  "git merge main -m 'Fast merge: Stage <- Main'",
  'git push',
  'git checkout main',
];

(async function () {
  let execExited = false;

  for (const cmd of commands) {
    if (execExited === false) {
      console.log(`SCRIPT - merge_main_to_stage - Executing ${cmd}`);
      await execPromised(cmd)
        .then((stdout) => console.log(stdout))
        .catch((stderr) => {
          console.error('ERROR', stderr);
          execExited = true;
          return;
        });
    }
  }
})();
