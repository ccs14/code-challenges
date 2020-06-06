// https://www.hackerrank.com/challenges/compare-the-triplets/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {

    let points = [0, 0];

    // can only function if arrays are same length
    if (a.length == b.length) {
        // compare every element in array
        for (let i= 0; i < a.length; i++) {
            // compare two conditions
            if (a[i] < b[i])
                points[1] += 1;
            else if (a[i] > b[i])
                points[0] += 1;
        }
    }

    return points;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
