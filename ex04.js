// Using the Queue principle, create a function that will reverse the first two elements in the queue
// Example: [1, 2, 3, 4, 5] => [2, 1, 3, 4, 5]

const Queue = require('./Queue')

function reverseFirstTwoElements() {
  // Your code here

}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

reverseFirstTwoElements(queue)
console.log(queue.printQueue()) // [2, 1, 3, 4, 5]