console.log('[#1] > first exercise...')

let word = '';

for (let masterCounter = 1; masterCounter <= 7; masterCounter++) {
  word += '#'

  console.log(word)
}

console.log('[#2] > second exercise...')

for (let masterCounter = 1; masterCounter <= 100; masterCounter++) {
  if ((masterCounter % 3 === 0) && (masterCounter % 5 === 0)) {
    console.log('FizzBuzz', ' > ', masterCounter)
  } else if (masterCounter % 3 === 0) {
    console.log('Fizz', ' > ', masterCounter)
  } else if (masterCounter % 5 === 0) {
    console.log('Buzz', ' > ', masterCounter)
  } else {
    console.log(masterCounter)
  }
}

console.log('[#3] > third exercise...')

let chessBoard = [], size = 8, chessRow = '', chessBoardAsString

for (let masterCounter = 0; masterCounter < size; masterCounter++) {
  for (let counter = 0; counter < size; counter++) {
    console.log(masterCounter, ' > ', counter)

    if (masterCounter % 2 === 0) {
      if (counter % 2 === 0) {
        chessRow += ' '
      } else {
        chessRow += '#'
      }
    } else {
      if (counter % 2 !== 0) {
        chessRow += ' '
      } else {
        chessRow += '#'
      }
    }
  }

  chessBoard[masterCounter] = chessRow

  chessRow = ''
}

chessBoardAsString = chessBoard.join('\n')

console.log(chessBoardAsString)
