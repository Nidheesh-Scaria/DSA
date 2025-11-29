function findVowels(string){
    let vowels='AEIOUaeiou'
    let result=[]
    for(let word of string){
        if(vowels.includes(word)) result.push(word)
    }

return result
}
let string="BrocampA"
console.log(findVowels(string))