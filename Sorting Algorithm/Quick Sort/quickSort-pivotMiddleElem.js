function quickSort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)
    let pivot = arr[mid];
    let left=[]
    let right=[]
    for(let i=0;i<arr.length;i++){
        if(i===mid) continue;
        if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([8, 3, 7, 4, 9, 2]));