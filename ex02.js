// Using the Stack principle, create a function that will reverse the position of the first two elements in the stack
// Example: [1, 2, 3, 4, 5] => [2, 1, 3, 4, 5]

const Stack = require('./Stack')

function reverseFirstTwoElements() {
  // Your code here
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

reverseFirstTwoElements(stack)
console.log(stack.printStack()) // [2, 1, 3, 4, 5]