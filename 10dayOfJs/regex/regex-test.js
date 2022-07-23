let re = /^learn/;
const test1 = 'learn regular expresssions';
const test2 = 'write regular expresssions';



console.log(re.test(test1))
console.log(re.test(test2))

//exut
re = /quick\s(brown).+?(jumps)/i
const test3 = "The Quick Brown Fox Jumps Over the Lazy Dog."

console.log(re.exec(test3))
console.log()
re = /(.).*\1/;

const str1 = 'wxyz';
const str2 = 'wxyzw';
const str3 = 'wxyzx';
const str4 = 'wxywz';

console.log('substring:', str1.match(re));
console.log('substring:', str2.match(re)[0]);
console.log('substring:', str3.match(re)[0]);
console.log('substring:', str4.match(re)[0]);


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /([aeiou]).+\1$/


    /*
     * Do not remove the return statement
     */


    return re

}

function cell_phone_regex() {
    return /\d{9}$/
}

function ms_rex() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */


    /*
     * Do not remove the return statement
     */
    return /^(Mr|Mrs|Ms|Dr|Er)[.]([a-zA-Z])+$/
}

const testre = /ab+c/
console.log(testre.test("abbbc"))



console.log("###################################")
console.log(regexVar().test("aeeaea"))
console.log(regexVar().exec("isi"))
console.log("###################################")
console.log(ms_rex().test("Dr.Carlos"))