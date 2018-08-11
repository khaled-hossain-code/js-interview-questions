// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
  steps(2);
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
  // steps(2)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=1) {
  if(n < row){
    return;
  }

  let step1 = '#'.repeat(row);
  let empty = step1.padEnd(n);
  console.log(`${empty}`);
  steps(n, row + 1);
}

function steps1(n) {
  for (let i=1; i<=n; i++){
   let step1 = '#'.repeat(i);
   let empty = step1.padEnd(n);
   console.log(`${empty}`);
  }
}

module.exports = steps;
