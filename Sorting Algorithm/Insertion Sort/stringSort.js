let fruits=["zigzag", "apple", "banana", "cherry"]

function sortLastCharacter(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let str=temp[temp.length-1]//str[str.length-1]
        let j=i-1
        
        while(j>=0 && arr[j][arr[j].length-1]>str){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(fruits)
console.log(sortLastCharacter(fruits))