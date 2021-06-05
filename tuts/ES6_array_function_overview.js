/**
 * Actual stuff to go over
 */

const arr = [1, 2, 3, 4, 5]

// just does whatever you want to the array, can change old array. doesn't return new array
arr.forEach((value, index, array) => {
  value = value + 2
  // array[index] = value
})
console.log(arr)

// creates new array based on how the elements were manipulated in the callback function
const arrmap = arr.map((x) => {
  return x + 2
})
console.log(arrmap)

// This returns a new array that filters out elements that don't meet the condition.
const filtered = arr.filter((x) => {
  return x < 4
})
console.log(filtered)

// This returns the first element that passes the condition
const found = arr.find((x) => {
  return x > 3
})
console.log(found)

// This returns the index of the first element to pass the condition
const foundIndex = arr.findIndex((x) => {
  return x > 3
})
console.log(foundIndex)

// This returns whether or not a value exists in an array
const doesItInclude = arr.includes(5)
console.log(doesItInclude)

/**
 * BONUS
 */
const ages = [8, 12, 34, 18]

const mapped = ages.map((x) => {
  if (x < 17) return "Can't do anything"

  let result = 'Able to drive'

  if (x > 21) result += ', and able to drink'

  return result
})

console.log(mapped)

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this)
  }
}

Array.prototype.myMap = function (cb) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    const newElementAtI = cb(this[i], i, this)
    newArray.push(newElementAtI)
  }

  return newArray
}

const myMapped = ages.myMap((x) => x + 2)
console.log(myMapped)
