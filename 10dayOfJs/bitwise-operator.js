'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getMaxLessThanK(n, k) {

    let max_value_before_k = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n + 1; j++) {
            const v = parseInt(i & j)
            if (v < k) {
                if (v > max_value_before_k)
                    max_value_before_k = v
            }

        }
    }
    return max_value_before_k

}

function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}

console.log(getMaxLessThanK(5, 2))