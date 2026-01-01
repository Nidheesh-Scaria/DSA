
function cocktailSort(arr) {
  let start = 0;
  let end = arr.length - 1;
  let swapped = true;

  while (swapped) {
    // Reset swapped flag for the forward pass
    swapped = false;

    // 1. Forward Pass (Bubble largest to the right)
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    // If nothing moved, the array is already sorted!
    if (!swapped) break;

    // The last item is now sorted, so we ignore it next time
    end--;

    // Reset swapped flag for the backward pass
    swapped = false;

    // 2. Backward Pass (Bubble smallest to the left)
    for (let i = end; i > start; i--) {
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
      }
    }

    // The first item is now sorted, so we ignore it next time
    start++;
  }

  return arr;
}

let arr = [5, 1, 4, 2, 8, 0, 2];
console.log(cocktailSort(arr)); 
