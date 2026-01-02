function firstNonRepeating(str){
    let map={}
    for(let char of str){
        map[char]=(map[char]||0)+1
    }
    console.log(map)
    for(let char of str){
        if(map[char]===1) return char
    }

}

let str="swiss"
console.log(firstNonRepeating(str))//w