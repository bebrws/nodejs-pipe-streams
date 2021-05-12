#!/usr/bin/env node

var child = require('child_process');

var catp = child.spawn('cat',['/Users/bbarrows/.zshrc']);
var grepp = child.spawn('grep', ['bbarrows']);

// myREPL.stdout.pipe(process.stdout, { end: false });

// process.stdin.resume();

// process.stdin.pipe(myREPL.stdin, { end: false });

// myREPL.stdin.on('end', function() {
//   process.stdout.write('REPL stream ended.');
// });

// myREPL.on('exit', function (code) {
//   process.exit(code);
// });



catp.stdout.on('data', (data) => {
    // console.log(`Received chunk ${data}`);
    grepp.stdin.write(data);
});

catp.stdin.on('end', function () {
    grepp.stdin.end();
});

grepp.stdout.pipe(process.stdout, { end: false });

catp.stdin.resume();

