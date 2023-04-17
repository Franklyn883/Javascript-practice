"use strict"
/* *****HOW JAVASCRIPT WORK****
/**
 * ************************HOISTING IN JAVASCRIPT******************************
 * Hoisting makes some types of variables accessible/usable in the code before they are
 * actually declared or initialized.
 * Before execution, code is scanned for variables declaration and for each variable,
 * a new property is created in the variable environment object.
 */

// ************Hoisting with var, let and const
//variable declared with var are hoisted and given a value of undefined
// Trying to access the value before initialization
//  console.log(a);//output: undefined. This is most times a source for bugs. 
//  console.log(b);//output: Uncaught ReferenceError:Cannot access 'b' before initialization
// console.log(c);//output: Uncaught ReferenceError:Cannot access 'b' before initialization
// //console.log(e);// output: ReferenceError: e is not defined
// var a = 10;
// let b = 10;
// const c = 15;
// //from the above you can see that the let and const are hoisted, but are not assigned any
// // values.The variables are stored in TDZ(temporal dead zone).

/*****Another weird var behavior */
// var a = 20;
// let d = 10
// console.log(window.a === a)//output:true. values declared with var on the global scope
//                           //are added to the window object property
// console.log(window.d === d)//output:false

/*****Another key difference let and const are block scope while var is function scope*/
// // if(d){
// //   var f = 25; 
// //   let g = 20;
// //   const h = 15;
// // }
// // console.log(`f can be accessed outside the block: ${f}`)
// // //output:f can be accessed outside the block: 25
// // console.log(`g can be accessed outside the block: ${g}`)
// // console.log(`h can be accessed outside the block: ${h}`)
// // //output:referenceError: g is not defined
// const funScope  = function(){
//   var i = 10;
//   let j = 20;
//   const k = 21;
// }
// console.log(i)
//output: ReferenceError: i is not defined
//variables declared by var in a block other than a function block can be accessed
// in the global scope

/**
 * ******** HOISTING IN FUNCTIONS*****
 * functions declaration are hoisted while expressions are not. You can call a function declaration before
 * initialization.
 */
// funDeclare();
// //output:I can be accessed before initialization
// function funDeclare(){
//   console.log('I can be accessed before initialization')
// }

// funExpress();
// //output: ReferenceError: Cannot access 'funExpress' before initialization
// const funExpress = function (){
//   console.log(`i can't be accessed for initialization`);
// }

/**
 * ******** CALL STACK********************/
 // This is the place where JavaScript stores the current execution context.Each time a function is called, a new
//execution context is created and pushed onto the call stack. When the function returns, its execution context is 
//popped off the call stack.The current execution context is always the one on top of the stack.
//Example
const name ="Frank";//1.The global execution context is created and pushed onto the call stack.The variable environment
                   //for this context is created, which includes the `name` variable initialized with the value "Frank".
                  // 2.The `firstFunc` and `secondFunc` functions are declared and initialized but the values are unknown
                 // 3. The `x` variable is declared and initialized with the result of calling the `firstFunc` function.

const firstFunc = ()=>{ //4.The `firstFunc` function is called and its execution context is pushed onto the call stack.
let a = 1;             // 5. Within the `firstFunc` function, the `a` variable is declared and initialized to `1`,                      
const b = secondFunc(7,9);//and the `b` variable is initialized with the result of calling the `secondFunc` function with
                        //the arguments `7` and `9.
                        // 6. The `secondFunc` function is called with the arguments `7`and `9`, and its execution
                        // context is pushed onto the call stack.
                        // 7. Within the `secondFunc` function, the `c` variable is declared and initialized to `2`,
                        // and then the function returns the value of `c` to its caller (step 6).
                       // 8. The `secondFunc` execution context is popped off the stack.
                    // 9. The `b` variable in `firstFunc` is assigned the value returned by `secondFunc` (which is `2`).
a = a + b;  // 10. The `a` variable in `firstFunc` is incremented by `b`, resulting in `a` being `3`.   
             // 11. The `firstFunc` execution context is popped off the stack.  
};
const secondFunc = (x, y) =>{
  var c = 2;
  return c;
}
const x = firstFunc();// 12.The value of `x` is now `undefined` (since `firstFunc` does
                      // not return a value).
                      // 13.The global execution context is the only remaining execution
                      // context on the stack.
                      // 14.The program terminates.

/***Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail
 with a message like “out of stack space” or “too much recursion”. */
 //Example
//  function chicken() {
//   return egg();
//   }
//   function egg() {
//   return chicken();
//   }
//   console.log(chicken() + " came first.");
//   // output:Uncaught RangeError: Maximum call stack size exceeded
//   // at egg (script2.js:110:3)
//   // at chicken (script2.js:107:10)
//   // at egg (script2.js:110:10)
//   // at chicken (script2.js:107:10)
//   // at egg (script2.js:110:10)
//   // at chicken (script2.js:107:10)
//   // at egg (script2.js:110:10)
//   // at chicken (script2.js:107:10)
//   // at egg (script2.js:110:10)
//   // at chicken (script2.js:107:10)

/**
 * **********The "this" keyword 
 *'this' is a special variable that is created for every function execution context.It points to the owner of the
 *of the function. 
 * The value of "this" is not static, it depends on how the function is called, and it's value is only assigned
 * when the function is called.
 * Here are some different scenarios:
 * global scope: "this" points to the window object.
 * Method: "this" pointes to the object calling the method
 * regular function: "this" keyword is set to undefined in strict mode, but points to the windows object if it's not
 * on strict mode.
 * arrow function:"this" points to the regular parent function's object, or to the windows object if the parent
 * function is a regular function
 * event listener:"this" keyword pointes to the DOM element that the handler is attached to
 */
//Examples:
//1. "this" in global scope points to the window object
console.log(this)//output:window

//2.regular function: "this" is assigned the value undefined in strict mode but points to the window object in non strict.
const sayHello = function(){
  console.log(this)//output:undefined
}
sayHello()
//3. arrow function: "this" points to the window object, even in strict mode
const sayHi = () => console.log(this)//output:window
sayHi()

//4.In a regular function inside an object, "this points to the object"
const john ={
  firstName:"John",
  year:1991,
  calcAge: function(){
    console.log(2023 - this.year)//output:32
    console.log(this === john)//output:true
    console.log(this)//output:{firstName: 'John', year: 1991, calcAge: ƒ}
  }
}
john.calcAge()

//5. In an arrow function inside an object, "this" points to the window object
const andrew ={
  firstName:"Andrew",
  year:1994,
  calcAge: () => {
    console.log(2023 - this.year)//output:Nan
    console.log(this === andrew)//output:false
    console.log(this)//output:window
  }
}
andrew.calcAge()

//Regular function vs Arrow function
const james = {
firstName:"James",
year:1990,
calcAge:function(){
  console.log(2023 - this.year);//output:33
  const isMillennial = function(){
    console.log(this)//output:undefined  (now it behaves like a regular function)
  }
  isMillennial()
}

}
james.calcAge()

//now lets try the same code with an arrow function
const jane = {
  firstName:"Jane",
  year:1992,
  calcAge:function(){
    console.log(2023 - this.year);//output:31
    const isMillennial = () => console.log(this,this===jane)//output: points to the jane object and returns true 
    isMillennial()
    }
  }
  jane.calcAge()
  
