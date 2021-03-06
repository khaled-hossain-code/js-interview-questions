// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// console.log(chunk([1, 2, 3, 4], 2))
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkedArr = [];
  let iterator = 0;

  while (iterator < array.length) {
    chunkedArr.push(array.slice(iterator, iterator + size));
    iterator += size;
  }

  return chunkedArr;
}

function chunk1(array, size) {
  const chunkedArr = [];
  
  while (array.length > 0) {
    chunkedArr.push(array.splice(0, size));
  }

  return chunkedArr;
}

module.exports = chunk;
