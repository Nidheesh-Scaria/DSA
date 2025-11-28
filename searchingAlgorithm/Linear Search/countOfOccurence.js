function countOfOccurence(arr,val){
    let count=0
    for(let num of arr){
        if(num===val){
            count++
        }
    }
    return count
}
let arr = [5, 7, 5, 5, 9,5], target = 25;
console.log(countOfOccurence(arr,target));