function maxElement(arr){
    let max=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

let arr = [12, -5, 20, 8, 15];
console.log(maxElement(arr));