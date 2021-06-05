const object = require('./data/object')

// FOR - IN LOOP <- VERY IMPORTANT
for (let i in object) {
  // name, email, password are keys
  // bob, etc. are values
  // i represents each key in our object
  // i is the key.  object[i] is the value
  // no, it's the specific value for the key
  // no, it only represents a specific value at that iteration
  // each time a loop runs, that's an iteration
  // so for 1st iteration, i is name, second i is email, 3rd is pwd
  // it goes till we reach the last key in object
  // because object has 3 keys, we go 3 times
  // yes, this is a special syntax for looping through objects.
  console.log(i, ':', object[i])
}
