function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
        // Declare second integer, double, and String variables.
    let secondIntger;
    let secondDouble;
    let secondString;
    // Read and save an integer, double, and String to your variables.
    secondIntger = 12 //parseInt(readLine())
    secondDouble = 4.0 //number(parseFloat(readLine()))

    //save value 
    let sumInteger = i + secondIntger
    let sumDouble = d + secondDouble

    // Print the sum of both integer variables on a new line.
    console.log(sumInteger)
        // Print the sum of the double variables on a new line.
    console.log(sumDouble)
        // Concatenate and print the String variables on a new line
    let saveSecondString = s + '' + secondString
        // The 's' variable above should be printed first.
    console.log(secondString)

}
main()