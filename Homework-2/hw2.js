// Javascript Camp, Week-2, Homework-2

// findPrime function returns whether the given numbers are prime or not.

function findPrime(...nums) {
  nums.forEach((number) => {
    if (number < 2) {
      return console.log(`${number} is not a prime number.`)
    }
     else if (number === 2 || number === 3) {
      return console.log(`${number} is a prime.`)
    }
     else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return console.log(number + " is not a prime number.")
        }
      }
      return console.log(number + " is a prime number.")
    }
  })
}
findPrime(-5, 10, 5, 56, 78, 39, 51, 27, 11, 13, 66, 81, 55, 39)


// isFriend function checks the given numbers are friend numbers or not.(Friend numbers: two different numbers that sum of the divisors of each is equal to the other number).

function isFriend(number1, number2) {
  let number1Divs = []
  let number2Divs = []

  dividerFinder(number1, number1Divs)
  console.log("First number's dividers:" + number1Divs)
  dividerFinder(number2, number2Divs)
  console.log("Second number's dividers:" + number2Divs)

  if (sumDividers(number1Divs) === number2 && sumDividers(number2Divs) === number1) {
    console.log(number1 + " and " + number2 + " are friend numbers.")
  } else {
    console.log(number1 + " and " + number2 + " are not friend numbers. They may be enemies.")
  }
}

function dividerFinder(number, array) {
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      array.push(i)
    }
  }
  return array
}

function sumDividers(array) {
  let sum = 0
  array.forEach((element) => {
    sum = sum + element
  })
  return sum
}
isFriend(6, 11)
isFriend(220, 284)
isFriend(1184, 1210)


// perfectNumber function finds perfect numbers in the range of 0-1000. (Perfect number: A positive number that is equal to the sum of its divisors, excluding itself).
// This function uses the dividerFinder and sumDividers functions given above.

function perfectNumber() {
  let perfects = []

  for (let number = 0; number < 1000; number++) {
    let divisors = []
    dividerFinder(number, divisors)

    if (number === sumDividers(divisors)) {
      perfects.push(number)
    }
  }
  return console.log("Perfect numbers from 0 to 1000 are = " + perfects)
}
perfectNumber()


// primeNumbers function finds prime numbers in the range of 0-1000.

function primeNumbers() {
  let primeNums = []

  for (let i = 0; i < 1000; i++) {
    if(isPrime(i)){
      primeNums.push(i)
    }
  }
  return console.log("Prime numbers from 0 to 1000 are = " + primeNums)
}

function isPrime(number) {
   if(number < 2){
     return false
   }
   else{
     for (let j = 2; j < number; j++) {
       if(number % j === 0){
         return false
       }
     }
   }
   return true
}
primeNumbers()