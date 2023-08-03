function oddNumber(array) {
    let oddNumberArray = [];
    for (var i = 0; i < array.length; i++) {
        let number = array[i];
        if (number % 2 !== 0) {
            oddNumberArray.push(number);
        }
    }
    return oddNumberArray;
}

function oddSum(oddNumberResult) {
    let sum = 0;
    for (let i = 0; i < oddNumberResult.length; i++) {
        let singleOddNumber = oddNumberResult[i];
        sum = sum + singleOddNumber;

    }
    return sum;
}

let array = [5, 7, 8, 10, 45, 30];
let oddNumberResult = oddNumber(array);
let oddNumberSum = oddSum(oddNumberResult);
console.log(oddNumberSum);