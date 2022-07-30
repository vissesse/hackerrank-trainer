function getMedian(input) {
    let median = 0
        // get the median
        // [x1, x2, x3, x4, x5, xn]
    const pos = Math.round(input.length / 2) // media value in the array
    if (input.length % 2 != 0) {
        // for the odd length
        // median = x3
        median = input[pos - 1]
    } else { // for the par one
        // [x1, x2, x3, x4, x5, x6]
        // mediam = (x3+x4) / 2
        const pos_2 = pos - 1 // the first median value. pos is th second media value
        const x3 = input[pos]
        const x4 = input[pos_2]
        median = (x3 + x4) / 2
    }
    return median.toFixed(1)
}

function processData(input) {
    //Enter your code here
    var mean = 0;
    var mode = -1;
    var mode_dict = {}

    // ordenar o array
    for (let i = 0; i < input.length; i++) {
        let pos = i
        let menor = input[i]
        for (let j = i; j < input.length; j++) {
            if (input[j] < menor) {
                menor = input[j]
                pos = j
            }
        }
        let aux = input[i]
        input[i] = menor
        input[pos] = aux
            // sum the N
        mean += input[i]

        // get the most popular one
        const key = `${input[i]}`
        if (mode_dict[key] != undefined) {
            mode_dict[key] += mode_dict[key]
        } else {
            mode_dict[key] = 1
        }
    }


    //get the mean
    // [x1, x2, x3, x4, x5, xn]
    // mean = (x1+x2 .. +xn)/ n
    const n = input.length
    mean = (mean / n).toFixed(1)

    // get the media
    const median = getMedian(input)

    // the most popular one
    const most_popular_one = getMode(input, mode_dict)
    console.log(mean)
    console.log(median)
    console.log(most_popular_one)
}

function getMode(input, mode_dict) {
    var most_popular_one = input[0] // popular incializations
    let largest = -1 // largest inicializations
    for (let i = 0; i < input.length; i++) {
        const item_key = input[i] // the one who must be popular
        const apears = mode_dict[item_key] // time appears
        if (apears > largest) {
            largest = apears
            most_popular_one = item_key
        }
    }
    return most_popular_one
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});

processData([64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060])