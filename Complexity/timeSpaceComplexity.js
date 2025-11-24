//time complexity

function operation(n) {
  return (n * (n + 5)) / 2;
} //it has 3 operations = *,+,/
//the operation count doesnt change with thw n(input)
//the time compelxity will be-O(1)

//console.log(operation(25));

function looping(n) {
  console.log("counting forward"); //1operation
  for (let i = 0; i < n; i++) {
    //2n operation
    console.log(i);
  }
  console.log("counting backward"); //2 operaion
  for (let i = n; i < 0; i++) {
    //2n operation
    console.log(i);
  }
}
//here the 4 operation but the 2,4 operation changes according to the input(n)
//so we have 2n+2 operations so time complexity will be based on n(input)- O(n)

//console.log(looping(5))

function printBoth(n) {
  //if n=2 4 opearion
  //if n=3 9operation
  //so n*n operations =>n^2 operation ie.O(n^2)-time complexity
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
//console.log(printBoth(3));


//space complexity


function arrayOps(array){
  let count=0
  for(let i=0;i<array.length;i++){
    count+=array[i]
  }
  return count
}//O(1) space complexity--not chnages with input remains constant



function arrayNumber(n){
  let array=[]
  for(let i=0;i<n;i++){
    array.push(i*20)
  }
  return array
}//O(n) space complexity--size of array changes according with the input

// primitive dataypes=>constant
//non primitive dataypes=>dynamic(varies from inputs)

// for 2d array space complexity will be O(n^2) space complexity
