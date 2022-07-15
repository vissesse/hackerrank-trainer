'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

/**
 * 
 * @returns 
is odd, print Weird
If
is even and in the inclusive range of to
, print Not Weird
If
is even and in the inclusive range of to
, print Weird
If
is even and greater than , print Not Weir
 */


function readLine() {
    return inputString[currentLine++];
}



function main() {

    const N = parseInt(readLine().trim(), 10);
    if ((N % 2 == 0) || (N >= 6 && N <= 20))
        console.log('weird')
    else if ((N > 20) || (N >= 2 && N <= 5)) {
        console.log('Not weird')
    }
}

main()