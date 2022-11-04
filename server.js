const { exec } = require('child_process');

const comment = "update db.json 04.11.22"

exec('make git m="' + comment + '"', (err, stdout, stderr) => {
    // handle err, stdout & stderr
    console.log(stdout);
});