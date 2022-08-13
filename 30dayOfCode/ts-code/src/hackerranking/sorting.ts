'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
}

export function bubleSort(array: number[]) {
    let n = array.length;
    let swaps= 0;
    for (let i = 0; i < n; i++) {
        // Track number of elements swapped during a single array traversal
        let numberOfSwaps = 0;
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            const element = array[j];
            const next_element = array[j + 1];

            if (element > next_element) {
                array[j] = next_element;
                array[j + 1] = element;
                numberOfSwaps++;
                swaps++
                
            }
        }
        // If no elements were swapped during a traversal, array is sorted
        if (numberOfSwaps == 0) {
            break;
        }
    }
 
 console.log(`Array is sorted in ${swaps } swaps.`)
 console.log(`First Element: ${array[0]}`)
 console.log(`Last Element: ${array[n-1]}`)
}