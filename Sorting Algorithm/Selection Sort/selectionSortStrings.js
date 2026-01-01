let fruits=["banana", "apple", "fig", "kiwi", "pear"]

function selectionSortStrings(arr){
    for(let i=0;i<arr.length-1;i++){
        let lowest=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j].length<arr[lowest].length){
                lowest=j
            }
        }
        if(lowest!==i){
            let temp=arr[i]
            arr[i]=arr[lowest]
            arr[lowest]=temp
        }
    }
    return arr
}
console.log(selectionSortStrings(fruits))