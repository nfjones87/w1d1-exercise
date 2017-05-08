// const month = 'January';
function howManyDays (month) {
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      console.log(`${month} has 31 days.`);
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      console.log(`${month} has 30 days.`);
      break;
    case 'February':
      console.log(`${month} usually has 28 days.`);
  }
}

howManyDays('January');
