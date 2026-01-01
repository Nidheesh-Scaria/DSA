function findNthLargest(arr, n) {
  let noSwap;
  for (let i = 0; i < n; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        noSwap = false;
      }
    }
    if(noSwap) break
  }
  return arr[arr.length-n]
}


let arr = [4, 20, 12, 10, 8];
console.log(findNthLargest(arr, 4));
console.log(bubbleSortNthLargest(arr, 4));
