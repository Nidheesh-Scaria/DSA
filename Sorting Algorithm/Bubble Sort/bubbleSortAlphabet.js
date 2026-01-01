function bubbleSortAlphabetAcending(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
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

function bubbleSortAlphabetDescending(arr) {
  let noSwap;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].toLowerCase() < arr[j + 1].toLowerCase()) {
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

function bubbleSortByName(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j].name.toLowerCase() > arr[j + 1].name.toLowerCase()) {
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

const students = [
  { name: "Bob", score: 92 },
  { name: "David", score: 70 },
  { name: "Alice", score: 85 },
  { name: "Charlie", score: 85 },
];
let fruits = ["banana", "Apple", "mango", "cherry"];
let alphabets = ["a", "z", "y", "b", "c", "h", "f", "n", "p"];

console.log("Function bubbleSortAlphabetAcending with array fruits:");
console.log("****************************");
console.log(bubbleSortAlphabetAcending(fruits));
console.log("Function bubbleSortAlphabetDescending with array alphabets:");
console.log("****************************");
console.log(bubbleSortAlphabetDescending(alphabets));
console.log("Function bubbleSortByName with array students:");
console.log("****************************");
console.log(bubbleSortByName(students));
