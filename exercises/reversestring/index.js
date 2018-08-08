// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce( (newStr, character) => {
    return character + newStr;
  },"");
}

reverse('asdf');

function reverse3(str) {
  let reversed = "";

  for(let character of str){
    reversed = character + reversed;
  }
  return reversed;
}

function reverse2(str) {
  let reversed = "";

  for(let i=str.length-1; i >= 0; i--){
    reversed = reversed + str[i];
  }
  return reversed;
}

function reverse1(str) {
  return str
          .split("")
          .reverse()
          d.join("");
}

module.exports = reverse;
