function findSquareRootOFTarget(arr,target){
    let start=0
    let end=arr.length-1
    
    while(start<=end){
        let middle=Math.floor((start+end)/2)
        if((arr[middle]*arr[middle])===target){
            
            return arr[middle]
        }else if(arr[middle]<target){
            start=middle+1
        }else{
            end=middle-1
        }
    }
    return -1
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(findSquareRootOFTarget(arr,64));