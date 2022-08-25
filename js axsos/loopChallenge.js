const printOdds = () => {
  let range = 20;
  while (range > 0) {
    if (range % 2 !== 0) {
      console.log(range)
    }
    range--;
  }
}

//decreasing multiples of 3

function decreaseMultiplesOfThree(){
  let count = 100;
  while (count > 0) {
    if (count % 3 === 0) {
      console.log(count)
      count--
    }
  }
}

// Print the sequence
function sequence(n) {
  for (let i=n; i>-4; i-=1.5){
    console.log(i)
  }
}

//sigma

function sigma(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n--
  }
  return sum
}

function factorial(n) {
  let sum = 1
  if (n === 0){
    return 1
  } else {
   return n * factorial(n-1)
  }
}


