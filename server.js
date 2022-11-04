const { exec } = require('child_process');
const fs = require('fs');

const source = "/Users/nboewer/REPOS/nodejs/cyclic/cyclic-server-json-annis-leckereien/db.json";
const destination = "/Users/nboewer/REPOS/nodejs/nodegit/test-nodegit-push-file/db.json"

//current folder path
console.log(__dirname);

// File destination.txt will be created or overwritten by default.
fs.copyFile(source, destination, (err) => {
    if (err) throw err;
    console.log('db.json was copied to destination');
});

var d = new Date,
    dformat = [d.getDate(),
    d.getMonth() + 1,
    d.getFullYear()].join('.') + ' ' +
        [d.getHours(),
        d.getMinutes()].join(':');

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