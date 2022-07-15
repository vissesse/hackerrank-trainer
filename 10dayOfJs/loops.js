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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var value = s
    var vowel = []
    var consonant = []

    for (let i = 0; i < value.length; i++) {
        if (value[i].toLocaleLowerCase() == 'a' || value[i].toLocaleLowerCase() == 'e' || value[i].toLocaleLowerCase() == 'i' || value[i].toLocaleLowerCase() == 'o' || value[i].toLocaleLowerCase() == 'u')
            vowel.push(value[i])
        else
            consonant.push(value[i])
    }

    vowel.forEach(v => {
        console.log(v)
    })

    consonant.forEach(c => (
        console.log(c)
    ))
}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}

main()