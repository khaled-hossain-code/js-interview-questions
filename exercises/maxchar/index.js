// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charDict = {};

  for (let character of str) {
    if(charDict[character]) {
      charDict[character]++;
    }else {
      charDict[character] = 1;
    }
  }
  
  const keys = Object.keys(charDict);
  const values = Object.values(charDict);
  const index = values.indexOf(Math.max(...values))
  return keys[index];

}

maxChar("aaaapple 1231111");
module.exports = maxChar;
