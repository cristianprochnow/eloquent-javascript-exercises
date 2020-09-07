# :one: Looping a triangle

## :bulb: Solutions

### :point_up: Me

```javascript
let word = '';

for (let masterCounter = 1; masterCounter <= 7; masterCounter++) {
  word += '#'

  console.log(word)
}
```

### :book: Book

```javascript
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
```

# :two: FizzBuzz

## :construction: Roadmap

- [x] Print all the numbers from 1 to 100
- [x] If a number is divisible by 3, print `Fizz` instead of the number
- [x] If a number is divisible by 5 (and not 3), print `Buzz` instead of the number
- [x] If a number is divisible by both, then print `FizzBuzz` instead of the number

## :bulb: Solutions

### :point_up: Me

```javascript
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
```

### :book: Book

```javascript
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
```

# :three: ChessBoard

## :construction: Roadmap

- [x] Define a loop that creates a array
- [x] Verify the even indexes
- [x] Verify the odd indexes
- [x] Join the arrays, to form a string only

## :bulb: Solutions

### :point_up: Me

```javascript
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
```

### :book: Book

```javascript
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
```
