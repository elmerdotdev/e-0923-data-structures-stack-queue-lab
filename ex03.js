// Using the Queue principle, create a function that will reverse the position of the last two elements in the queue
// Example: [1, 2, 3, 4, 5] => [1, 2, 3, 5, 4]

const Queue = require('./Queue')

function reverseLastTwoElements(queue) {
  // Your code here

}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

reverseLastTwoElements(queue)
console.log(queue.printQueue()) // [1, 2, 3, 5, 4]