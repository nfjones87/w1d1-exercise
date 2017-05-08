function decode(code) {
  var firstLetter = code.charAt(0);
  if (firstLetter === 'a') {
    return code.charAt(1);
  } else if (firstLetter === 'b') {
    return code.charAt(2);
  } else if (firstLetter === 'c') {
    return code.charAt(3);
  } else if (firstLetter === 'd') {
    return code.charAt(4);
  } else {
    return ' ';
  }
}

// function decode_sentence(sentence) {
//   const words = sentence.split(' ');
//   return words.map(function(word) {
//     return oneWord(word);
//   }).join('');
// }
//
function decode_sentence(sentence) {
  const words = sentence.split(' ');
  let result = [];
  for (i = 0; i < words.length; i++) {
    result.push(decode(words[i]));
  }
  return result.join('');
}

// console.log(decode_sentence('craft block argon meter bells brown croon droop'));

function stupid(n) {
  let result1 = "", result2 = "";
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < n; k++) {
        result2 = result1 + "q";
        result1 = result2 + "w";
      }
  return result1;
}

// for (i = 0; i
for (let n = 10; n <= 100; n += 10)
  console.log(n, stupid(n).length)




// console.log(decode('craft'));
// console.log(decode('block'));
// console.log(decode('argon'));
// console.log(decode('meter'));
// console.log(decode('bells'));
// console.log(decode('brown'));
// console.log(decode('croon'));
// console.log(decode('droop'));
