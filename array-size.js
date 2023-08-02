function make_avg(numbers){
    let sum = 0;  
  for(let i = 0; i<numbers.length; i++){
    let number = numbers[i];
    sum = sum + number;
    
    
    
  } 
  let average = sum / numbers.length;
  return average;
  
}
const numbers = [6, 2, 5, 6, 4, 9];
const result = make_avg(numbers);
console.log(result);
