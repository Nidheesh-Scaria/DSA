function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }

        arr[j+1]=temp
    }
    return arr
}
function descendingOrder(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0&&arr[j]<temp){
            arr[j+1]=arr[j]
            j--
        }

        arr[j+1]=temp
    }
    return arr
}
let nums=[4, 20, 12, 10, 8]
let arr=[-1,-10,10,1,2,30]
console.log(insertionSort(arr))
console.log(descendingOrder(nums))