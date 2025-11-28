function thirdLargest(arr) {
  let first=-Infinity
  let second=-Infinity
  let third=-Infinity
  for(let num of arr){
    if(num>first){
        third=second
        second=first
        first=num
    }else if(num>second && num <first){
        third=second
        second=num
    }else if(num>third&& num <second){
        third=num
    } 
  }
  return third
}

let arr = [12, 5, 20, 8, 15];
console.log(thirdLargest(arr));
