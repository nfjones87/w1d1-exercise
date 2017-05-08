function RockPaperScissors(userChoice){
    const computer = 1 + Math.floor((Math.random()*3));
    const winning = userChoice - computer;
    const rpc = [
      {roll: 'Scissors', val: 1},
      {roll: 'Paper', val: 2},
      {roll: 'Rock', val: 3},
    ];
    console.log(`User:${rpc[userChoice -1].roll}, Computer:${rpc[computer -1].roll}`)
    if (winning === 0) {
      // console.log(`User:${rpc.roll}, Computer:${computer}`);
      console.log('You tied!');
    } else if (winning === -1 || winning === 2) {
      // console.log(`User:${rpc.roll}, Computer:${computer}`);
      console.log('You win!');
    } else {
      // console.log(`User:${rpc.roll}, Computer:${computer}`);
      console.log('You lose!');
    }

}

RockPaperScissors(4);
