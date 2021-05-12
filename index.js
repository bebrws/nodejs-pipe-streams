#!/usr/bin/env node

var child = require('child_process');

var catp = child.spawn('cat',['/Users/bbarrows/.zshrc']);
var grepp = child.spawn('grep', ['BBARROWS']);



catp.stdout.on('data', (data) => {
    // console.log(`Received chunk ${data}`);
    grepp.stdin.write(Buffer.from(data.toString().toUpperCase()));
    // grepp.stdin.write(data);
});

catp.stdin.on('end', function () {
    grepp.stdin.end();
});

grepp.stdout.pipe(process.stdout, { end: false });

catp.stdin.resume();

