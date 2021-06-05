const arr = require('./data/array')

// FOREACH
// this function basically does the same as the for/of
arr.forEach((arrayValue) => {
  console.log(arrayValue)
})
// What's happening here is that you're passing a function into the forEach function.  The forEach function goes through each index in the array.  It gives the function we place inside the forEach function access to the values at those indexes in the array.
// Does that make sense?

// Meaning, I could do this:

console.log('\n')

function myFunction(arrayValue) {
  console.log(arrayValue)
}

arr.forEach(myFunction)

// what happens here? The forEach function automatically passes the arrayValue parameter to myFunction at each iteration.  That's how myFunction can print arrayValue at each iteration.  It just gives it the value.  That's it.
// Just gonna run stuff here instead
// just gonna separate this stuff now, since i can lol
