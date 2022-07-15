/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
    // Complete the function
    let firstLargNumber = -1
    let secondLargestNumber = firstLargNumber
    for (let i = 0; i < nums.length; i++) {
        var number = parseInt(nums[i])
        if (number > firstLargNumber) {
            secondLargestNumber = firstLargNumber
            firstLargNumber = number
        } else if (number > secondLargestNumber && number != firstLargNumber) {
            secondLargestNumber = number

        }
    }
    console.log(nums)
    console.log("first lag number", firstLargNumber)
    console.log("second lag number", secondLargestNumber)
    return secondLargestNumber
}



console.log(getSecondLargest([2, 3, 6, 6, 5]))