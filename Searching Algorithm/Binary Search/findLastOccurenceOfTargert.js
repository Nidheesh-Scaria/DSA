function findLastOccurenceOfTargert(arr,target){
    let last=-1
    let start=0
    let end=arr.length-1
    while(start<=end){
        let middle=Math.floor((start+end)/2)
        if(arr[middle]===target){
            last=middle
            start=middle+1
        }else if(arr[middle]<target){
            start=middle+1
        }else{
            end=middle-1
        }
    }
    return last
}

let arr = [1,2,2,2,2,2,2,3,3,4,5,6,6,7];
console.log(findLastOccurenceOfTargert(arr,6))