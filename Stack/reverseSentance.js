function reverseSentance(sent) {
  let splitted = sent.split(" ");
  let stack = [];
  for (let word of splitted) {
    stack.push(word);
  }
  let reversed = "";

  while (stack.length > 0) {
    let value = stack.pop();
    reversed += `${value} `;
  }
  return reversed;
}
const sentance = "Javascript is a popular language";
let result = reverseSentance(sentance);
console.log(result);
