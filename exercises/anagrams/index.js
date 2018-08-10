"use strict";
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const _ = require('lodash');

anagrams('RAIL! SAFETY!', 'fairy tales');

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');

  return stringA === stringB; 
}

function anagrams2(stringA, stringB) {
  let countA = replaceAndCount(stringA);
  let countB = replaceAndCount(stringB);

  return _isEqual(countA, countB); 
}

function _isEqual(countA, countB) {
  if (Object.keys(countA).length !== Object.keys(countB).length) {
    return false;
  }

  return Object.keys(countA).every( key => {
    return countA[key] === countB[key];
  })
}

function anagrams1(stringA, stringB) {
  let countA = replaceAndCount(stringA);
  let countB = replaceAndCount(stringB);

  return _.isEqual(countA, countB);

}
function replaceAndCount(string) {
  string = string.replace(/[^\w]/g, "").toLowerCase();
  let countedLetter = {};

  for (let letter of string) {
    countedLetter[letter] = countedLetter[letter] + 1 || 1;
  }
  return countedLetter;
}
 
module.exports = anagrams;
