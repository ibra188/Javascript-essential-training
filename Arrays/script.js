/**
 * working with arrays
 */



const collection = ["piggy", "item", 5, true];
collection.unshift(collection.pop());
console.log(collection);

// challage
let item = ["computer", "pen", "tea", "books"];
item.pop();
console.log(item);

// Our array with items
const cart = ['apple', 'banana', 'pear'];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // Logs: 'pear'

// Add an item to our 'cart' array
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // Logs: 'orange'



// Our array with items
const colors = ['red', 'green', 'blue'];

// Using length property
const lengthWay = colors[colors.length-2];
console.log(lengthWay); // Logs: 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // Logs: 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // Logs: 'green'

