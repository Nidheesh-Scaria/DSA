function reverseString(str){
    let stack=[]
    let reversed=''
    for(let char of str){
        stack.push(char)
    }
    while(stack.length>0){
        reversed+=stack.pop()
    }
    return reversed
}
let reversed=reverseString("Hello world")
console.log(reversed)//dlrow olleH




