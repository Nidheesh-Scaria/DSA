function reverseString(str) {
  if (str === "") {
    return "";
  }
  //return reverseString(str.substr(1))+str.charAt(0)
  return reverseString(str.slice(1, str.length)) + str.charAt(0);
}
console.log(reverseString("hello"));
