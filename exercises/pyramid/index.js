// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
  pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n) {
  let width = fibonachi(n);
  let hash, empty;


  for(let row=1; row<=n; row++){
    hash = '#'.repeat(fibonachi(row));
    empty = ' '.repeat(n - row)

    console.log(`${empty}${hash}${empty}`);
  }
}

function fibonachi(n) {
  return n + n-1;
}

module.exports = pyramid;
