const arr = ['a', 'b', 'c', 'd', 'e']

arr.forEach(function (element) {
  console.log(element)
})

// over each iteration, we get back the current value we're at, the current index, and the array
arr.forEach((x, i, a) => {
  console.log(x)
  console.log(i)
  console.log(a)
})

Array.prototype.myForEach = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    callBackFunction(this[i], i, this)
  }
}

arr.myForEach((x, i, a) => {
  console.log(x)
  console.log(i)
  console.log(a)
})
