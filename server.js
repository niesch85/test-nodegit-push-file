const { exec } = require('child_process');

const comment = "update db.json 04.11.22"
executeGitCommands();

async function executeGitCommands() {
    await execShellCommand('git add .');
    console.log('git add command completed');
    await execShellCommand('git commit -m "' + comment + '"');
    console.log('git commit command completed');
    await execShellCommand('git push -u origin main');
    console.log('git push command completed');
}


function execShellCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}