function leapYearFind(array){
    let newArray = [];
   for(let i = 0; i< array.length; i++){
    let singleYear = array[i];
    if(singleYear % 4 == 0 && singleYear % 100 == 0 && singleYear % 400 == 0){
      newArray.push(singleYear);
    }
   }
   return newArray;
}

let array = [2020, 2023, 2024, 2025, 2028, 2030,2000];
let result = leapYearFind(array);
console.log(result);