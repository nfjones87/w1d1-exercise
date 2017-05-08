

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
console.log(decode('craft'));
console.log(decode('block'));
console.log(decode('argon'));
console.log(decode('meter'));
console.log(decode('bells'));
console.log(decode('brown'));
console.log(decode('croon'));
console.log(decode('droop'));
