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
    // Enter your code here
    let print = new Printer(); 
    print.printArray(inputLines)
}


export class Printer<T>{
    /**
     * class generic class
     * fro print enay type of date
     */

     printArray(array: T[]){
        for (const iterator of array) {
            console.log(iterator)
            
        }

     }
}