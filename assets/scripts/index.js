/**------------TASK1------------**/
//1.
// : Create a createShoppingCart function that allows users to add items to a shopping cart, calculate the total cost, and display the cart contents.
// :
// The createShoppingCart function should return an object with the following methods:
// addItem(itemName, price): Adds an item to the cart.
// removeItem(itemName): Removes an item from the cart if it exists.
// getTotal(): Returns the total cost of the items in the cart.
// showCart(): Displays all items currently in the cart.
// : Use a closure to store the cart items and their prices privately

//-----------------------------------------------------------------------------
// function createShoppingCart(){
//   let cart = [];
//   return {
//     addItem: function(itemName,price){
//       let newObj = {};
//       newObj.itemName = itemName;
//       newObj.price = price;
//       cart.push(newObj);
//     },
//     removeItem: function(itemName){
//       let updatedCart = cart.filter((item)=>item.itemName!==itemName);
//       cart=updatedCart;
//     },
//     getTotal: function(){
//       let total=cart.reduce((total,item)=>total+=item.price,0);
//       return total;
//     },
//     showCart: function(){
//       return cart;
//     }
//   }
// }

// let createCart = createShoppingCart();
// createCart.addItem('book',30);
// createCart.addItem('ereaser',10);
// createCart.addItem('pencil',5);
// createCart.addItem('book',20);
// createCart.removeItem('book');
// console.log(createCart.getTotal());
// console.log('Cart display:',createCart.showCart());

//NOTE: If you want to remove only the first occurence of the item in the cart, you can use splice with for loop.
//----------------------------------------------------------------------------

/**------------TASK2------------**/
// 2.
// : Create a function memoize(fn) that improves the performance of any function by caching its previously computed results.
// :
// The memoize function should accept another function fn as an argument and return a new function that:
// Caches the result for a given input.
// If the function is called again with the same input, it returns the cached result instead of re-executing fn.
// :
// const memoizedAdd = memoize(add); should cache the results of add(a, b).
// : Use an object inside the closure to store inputs and their corresponding outputs.

//----------------------------------------------------------------------------
//add function to add inputs 
// function add(a,b){
//   return a+=b;
// }

// function memoize(fn){
//   let cache = {}; //object to store inputs and its outputs
//   return (n) => {
//     //checks if n input is available as key in cache object
//     if(n in cache){
//       console.log('Value being fetched from cache:');
//       return cache[n];
//     }
//     else{
//       console.log('Calculating result:');
//       let value = parseInt(prompt('Which value do you want to add to input?'));
//       let result = add(n,value);
//       cache[n] = result;
//       return result;
//     }
//   }
// }

// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(1));
//----------------------------------------------------------------------------


/**------------TASK3------------**/
// 3.
// : Create a function createEventLogger that keeps track of events happening in an application.
// :
// The createEventLogger function should return an object with methods to:
// logEvent(eventName): Adds an event to the event log.
// getEvents(): Returns all logged events.
// clearLog(): Clears the event log.
// : Use closure to maintain the event log, which should be private.

//----------------------------------------------------------------------------
// function createEventLogger(){
//   let event_log = [];
//   return {
//     logEvent: function(eventName){
//       event_log.push(eventName);
//     },
//     getEvents: function(){
//       return event_log;
//     },
//     clearLog: function(){
//       event_log=[];
//     }
//   }
// }

// let eventLogger = createEventLogger();
// eventLogger.logEvent('User clicked the button');
// eventLogger.logEvent('User added item to the cart');
// eventLogger.logEvent('A file is being uploaded to the folder');
// console.log(eventLogger.getEvents());
// eventLogger.clearLog();
// console.log(eventLogger.getEvents());
//----------------------------------------------------------------------------



/**------------TASK5------------**/
// 5.
// : Create a createBankAccountWithInterest function that simulates a bank account with interest accumulation.
// :
// The function should return an object with:
// deposit(amount): Deposits money into the account.
// withdraw(amount): Withdraws money from the account.
// checkBalance(): Returns the current balance.
// addInterest(rate): Adds interest to the balance (based on a percentage rate).
// : Use closures to maintain and update the balance and interest rate privately.

//----------------------------------------------------------------------------
// function createBankAccountWithInterest(){
//   let balance=0;
//   let rate = 10;
//   return {
//     deposit: function(amount){
//       balance+=amount;
//     },
//     withdraw: function(amount){
//       balance-=amount;
//     },
//     checkBalance: function(){
//       return balance;
//     },
//     addInterest: function(rate){
//       balance+=(balance*rate)/100;
//     }
//   }
// }

// let createBankAccount = createBankAccountWithInterest();
// createBankAccount.deposit(100);
// createBankAccount.withdraw(20);
// console.log(createBankAccount.checkBalance());
// createBankAccount.addInterest(10);
// console.log(createBankAccount.checkBalance());
//----------------------------------------------------------------------------


/**------------TASK4------------**/
// 4.
// : Create a function createCountdownTimer that sets up a countdown timer.+
// The function should return an object with:+
// start(seconds): Starts the countdown from the given seconds.+ 
// getTime(): Returns the remaining time in seconds.
// stop(): Stops the countdown.
// reset(seconds): Resets the countdown timer to the specified number of seconds.
// : Use a closure to store the countdown time, and make sure it can be updated by the methods.

function createCountdownTimer(){
  let countdown;
  let timer;
  return {
    start: function(seconds){
      countdown=seconds; //start countdown from 10 seconds.
      let timer=setInterval(()=>{
        if(countdown>0){
          countdown--;
        } else{
          clearInterval(timer);
        }
      },1000)
    },
    getTime: function(){
      return countdown;
    },
    stop: function(){
      clearInterval(timer);
    },
    reset: function(seconds){
      countdown=seconds;
      clearInterval(timer);
    }
  }
}

let countdownTimer = createCountdownTimer(); 
countdownTimer.start(10);
setTimeout(() => {
  console.log(countdownTimer.getTime()); // After some time, check the remaining countdown.
}, 4000);
