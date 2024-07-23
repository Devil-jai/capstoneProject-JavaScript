const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
  ];
  
//   Input: cart1
//   Output: 2200
//   Explanation: price * quantity of all products = 1000 + 2 * 500 + 4 * 50 = 2200

const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
  ];
  
//   Input: cart2
//   Output: 114
//   Explanation: price * quantity of all products = (5 * 10 + 3 * 8 + 2 * 5 + 10 * 3) = 114

function calculateTotal(cart) {
    // Write your code here
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     total += cart[i].price * cart[i].quantity;
    // }
    // return total;

    const total = cart.reduce(function(acc,item){
        return acc + item.price * item.quantity
    },0)
    return total
}

// Do not modify the below lines
module.exports = { calculateTotal };    
console.log(calculateTotal(cart2))