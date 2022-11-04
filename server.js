const { exec } = require('child_process');

var d = new Date,
    dformat = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('.') + ' ' +
        [d.getHours(),
        d.getMinutes(),
        d.getSeconds()].join(':');

const comment = "update db.json " + dformat
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