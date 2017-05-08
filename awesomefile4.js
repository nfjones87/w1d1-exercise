const input = 'craft block argon meter bells brown croon droop';

function decode (sentence) {
  const words = sentence.split(' ');

  function decodeWord(word) {
    const code = {
      a: 2,
      b: 3,
      c: 4,
      d: 5
    }
      if (code[word[0]]) {
        let index = code[word[0]] - 1;
        return word[index];
      }
      return ' ';
  }
  return words.map(function (word) {
    decodeWord(word);
  });
}
console.log(decode(input));



console.log(decodeWord(testInput));
