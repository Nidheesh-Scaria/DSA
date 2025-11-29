function secondLargest(arr) {
  let first = -Infinity;
  let second=-Infinity;

  for(let num of arr){
    if(num>first){
        second=first
        first=num
    }else if(num>second && num<first){
        second=num
    }
  }
  return second;
}

let arr = [12, 5, 20, 8, 70, 15, 100];
console.log(secondLargest(arr));
