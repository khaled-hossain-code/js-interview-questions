// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox')
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

function capitalize1(str) {
  let strArr = str.split(' ');

  strArr.forEach( (element, index, array) => {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
  });

  return strArr.join(' ');
}

module.exports = capitalize;
