const arr = require('./data/array')

// arrays are one of the most important data types in javascript
// they have many special functions that aren't available to other data types, making them especially powerful
// let's look at a few functions.  first, we'll look at a special way to do a for loop that can only be done using arrays

// FOR - OF LOOP <- Let's you iterate through all values of arr
// In our case, "i" represents the value of the index we're dealing with at each iteration.
for (let i of arr) {
  // console.log(arr[i]) // <- this wouldn't work
  // remember, "i" IS NOT an index.  It's the VALUE of the index.
  // so you'd do it like this:
  console.log(i)
}

// as you can see, we iterated through arr

console.log('\n')

// what we did before wasn't really a function.  it was a cleaner way of iterating through an array.  now, we're actually going to get into very useful/powerful ES6 functions for arrays.
// ES6 just means newer.
