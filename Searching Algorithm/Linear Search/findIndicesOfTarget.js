function linearSearch(arr,target){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            result.push(i)
            
        }
    }
    return result
}



let arr = [1, 3, 7, 3, 5], target = 3;
console.log(linearSearch(arr,target));