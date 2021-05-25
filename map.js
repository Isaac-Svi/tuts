// now we're going to learn one of the most useful and powerful array functions in javascript

// This is the MAP function.  The map function iterates through an array, just like the forEach function.
// However, it has the ability to manipulate each array value it iterates over AND return those values in a new array.
// Of course you can also manipuate an array's values with forEach, but you can't return a new array with forEach.
// With forEach, you're just manipulating the original array.

// Let's see how it works

const arr = require('./data/array')

// Here, I'm making each value in array arr all caps.
const newArr = arr.map((arrValue) => arrValue.toUpperCase())

console.log(arr)
console.log(newArr)

// Keep in mind that both map and forEach can also give you the index of each value as a 2nd parameter.
// Like this:

// Right now, I'm iterating through arr, and returning a new array of just the indexes
// It's not a special syntax, and it wouldn't matter if it was named the same as something else in our file, since it's scoped only to our function.  Even though I'm not using it, I'm still including it, because I want the second parameter of index.
const arr2 = arr.map((arrValue, index) => index)
console.log(arr2)

// I think that's it for now.  I'm just going to upload this to github, so you can go over the code and notes. :)
