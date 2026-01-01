function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  let result = [];
  let j = 0;
  let i = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}



let arr = [8, 3, 7, 4, 9, 2];
console.log(mergeSort(arr));
