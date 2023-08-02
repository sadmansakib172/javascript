function odd_even(number){
    if(typeof number !== "number" || !Number.isInteger(number)){
        throw new Error("Input must be an integer number: ");
    }
 if(number % 2 == 0){
    return "even";
 }
 else{
    return "odd";
 }
}

let result = odd_even(36);
console.log(result);