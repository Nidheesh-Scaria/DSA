function reverseSentanceNwords(sent) {
  let splitted = sent.split(" ");
  let reversed = "";
  let stack = [];
  for (let word of splitted) {
    stack.push(word);
  }
  while (stack.length > 0) {
    let reversedWords = "";
    let value = stack.pop();
    let newStack = [];
    for (let char of value) {
      newStack.push(char);
    }
    while (newStack.length > 0) {
      let letter = newStack.pop();
      reversedWords += `${letter}`;
    }
    reversed += `${reversedWords} `;
  }
  return reversed;
}

function reverseWordsInSentance(sent) {
  const words = sent.split(" ");
  const stack = [];
  let result = "";
  for (let word of words) {
    let charStack = [];
    for (let char of word) {
      charStack.push(char);
    }
    while (charStack.length > 0) {
      result += charStack.pop();
    }
    result += " ";
  }
  return result;
}

const sentance = "Javascript is a popular language";
let result = reverseSentanceNwords(sentance);
console.log(result);//egaugnal ralupop a si tpircsavaJ
const sample = reverseWordsInSentance(sentance);
console.log(sample);//tpircsavaJ si a ralupop egaugnal 
