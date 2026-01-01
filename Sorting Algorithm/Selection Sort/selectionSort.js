function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // Store the i to lowest variable
    
    // Look for a smaller number in the rest of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j; // Update the lowest with the index of smaller number if small number found
      }
    }
    
    // Only swap if the lowest !== the value of i
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

let arr = [29, 10, 14, 37, 13];
console.log(selectionSort(arr))