// Using the Stack principle, create a function that will reverse the position of the last two elements in the stack
// Example: [1, 2, 3, 4, 5] => [1, 2, 3, 5, 4]

const Stack = require('./Stack')

function reverseLastTwoElements() {
 // Your code here 

}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

reverseLastTwoElements(stack)
console.log(stack.printStack()) // [1, 2, 3, 5, 4]