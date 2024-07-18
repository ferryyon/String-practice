const str1 = "abcd123.456";
function processString(str) {
  let intBool = false;
  let char = "";
  for (let letter of str) {
    if (!isNaN(letter)) {
      char += letter;
      intBool = true;
    } else if (intBool && letter === ".") {
      const charIndex = str.indexOf(letter);
      if (str[charIndex + 1] && str[charIndex + 2]) {
        char += "." + str[charIndex + 1] + str[charIndex + 2];
      } else if (str[charIndex + 1] && !str[charIndex + 2]) {
        char += "." + str[charIndex + 1] + "0";
      } else if (!str[charIndex + 1] && !str[charIndex + 2]) {
        char += "." + "0" + "0";
      }
    }
  }
  return char;
}
console.log(processString(str1));
