/*
1. What will this code print to the console?

async function myFunction() { 
    return 'hello world';
  }
  
  myFunction()
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })

  answer: hello world 

  2. True or False: the async...await syntax has functionality that cannot be accomplished by native promises.

  answer: false; JS used callback functions to handle  asynchronous actions. Callback  use complex nesting code which is hard to read, debug, and scale. ES6 integrated native promises to write readable code. 

  3. What purpose does the await keyword serve?

  It's an operator used only inside an async function that halts the execution of a function until a given promise is no longer pending and returns the resolved value of the promise. 

  4. What does the function example() return?

  async function example() { }

  answer: undefined 

  5. Which of the following is NOT a benefit of the async...await syntax?
  
  answer: It causes promises to resolve faster.

  It lets us catch rejected promise errors with the exact same syntax we catch other types of errors

  It lets us easily store and refer back to the resolved values of eariler promises in a promises chain.

  It reads more similary to sycnchronous code

  6. What purpose does the async keyword serve?

  answer: It's a keyword which indicates an asynchronous function

  7. Given that firstPromise(), secondPromise(), and thirdPromise() do not depend on each other to execute, what isn’t ideal about the provided code?

  async function threePromises() {
  let first = await firstPromise();
  let second = await secondPromise(); 
  let third = await thirdPromise();
  console.log(first, second, third);
}

answer: Using await halts the execution of the function which means consecutive promises would wait to execute until the previous promise resolved. Instead, we should allow for concurrency whenever possible - concurrent() function

8. Which of the following is useful for awaiting multiple promises where all are required but none depend on each other to execute?

answer: Promise.all()

