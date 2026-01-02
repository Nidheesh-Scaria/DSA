function bubbleSortAscendingOne(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwap = false;
      }
    }
    //noSwap will be true for a sorted array
    if (noSwap) break;
  }
  return arr;
}
//abnother forloop method
function bubbleSortAscendingTwo(arr) {
  let noSwap;
  for (let i = 0; i < arr.length - 1; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function bubbleSortDecending(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

function bubbleSortByScore(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap=true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j].score > arr[j + 1].score) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr
}

const arr1 = [5, 1, 2, 8, 3, 9, -10, -1];
const arr2 = [5, 1, -2, 8, -3, 9, 10];

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 85 },
  { name: "David", score: 70 },
];

console.log("Function bubbleSortAscendingOne with array arr1:")
console.log('****************************')
console.log(bubbleSortAscendingOne(arr1));
console.log("Function bubbleSortAscendingTwo with array arr2:")
console.log('****************************')
console.log(bubbleSortAscendingTwo(arr2));
console.log("Function bubbleSortDecending with array arr1:")
console.log('****************************')
console.log(bubbleSortDecending(arr1));
console.log("Function bubbleSortByScore with array students:")
console.log('****************************')
console.log(bubbleSortByScore(students));
