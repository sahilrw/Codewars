// A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.
// Given two integers, find the result which the little boy will get.
// Example
// For param1 = 456 and param2 = 1734, the output should be 1180

//     456
//    1734
// + ____
//    1180

// The little boy goes from right to left:
// 6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column
// 5 + 3 = 8
// 4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.
// There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1

function additionWithoutCarrying(a,b) {
  let result = 0;
  let mul = 1;
  
  while (a > 0 || b > 0){
    let d1 = a % 10;
    let d2 = b % 10;
    const sum = (d1 + d2) % 10
    
    result += sum * mul
    mul *= 10
    
   a = Math.floor(a / 10) 
   b = Math.floor(b / 10) 
  }
  return result;
}