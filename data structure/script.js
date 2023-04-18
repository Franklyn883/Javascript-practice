// // 'use strict'
// // /**
// //  * Destructuring an Array in Js
// //  */
// // const arr = [2,3,4];
// // //we can destructure this array
// // const [x,y,z] = arr//this is the same as
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // console.log(a,b,c)
// // console.log(x,y,z);

const restaurant = {
  name: "classio Italiano",
  location: "Via Angelo Tavanti 23, Firenze italy",
  Categories: ["italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlia bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ mainIndex, starterIndex, time, address }) {
    console.log(`Order received:  ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngred, ...otheringred) {
    console.log(`Here is your pizza order of: ${mainIngred}, ${otheringred} `);
  },
};
// restaurant.orderDelivery({
//   time : '22:30am',
//   address : "no 10 slope, Ikpoba hill",
//   mainIndex :2,
//   starterIndex : 0,
// }
// )
// restaurant.orderPizza('bread','rice','beans','dough')

// // // const { name, openingHours, Categories} = restaurant
// // // console.log(name);
// // // console.log(openingHours)
// // // console.log(Categories)
// // //we can change their names if we want
// const {
//   name: restaurantName,
//   openingHours: hours,
//   Categories: tags,
// } = restaurant;
// // console.log(restaurantName)
// // console.log(hours);
// // console.log(tags);
// // //we can set name for property that don't exist yet
// // const { menu = [], starterMenu:starters = [] } = restaurant;
// // console.log(menu)
// // console.log(starters)
// // const [starter, mainMeal] = restaurant.order(2, 0)
// // console.log(starter, mainMeal);
// // let [first, second] = restaurant.Categories//this takes the first and second element of
// //                             //categories and assign it to first and second
// // console.log(first, second);
// // const [ , ,third, fourth] = restaurant.Categories
// // console.log(third, fourth);

// // //switching variables: lets say we want to make the first to store what the second holds
// // //before we can use:
// // // const temp = first;
// // // first = second;
// // // second = temp;
// // // console.log(first,second)
// // //now with destructuring it's simple
// // [first, second] = [second, first]
// // console.log(first, second);

// // //destructuring a nested array
// // const nested = [2, 4, [5,4]];
// // let [, ,[d,e]] = nested//this is how you destructure an array
// // console.log(d,e)

// // //destructuring an object

// // // //destruction while switching values
// // let a = 111;
// // let b = 999;

// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj); //We put them in bracket because js treat anything that starts with curly braces as a code blockd
// // console.log(a, b);
// // //destructing a nested object

// // const {
// //   fri: { open: o, close: c },
// // } = hours;
// // console.log(o, c);
// // we can go further and make another method

// /**
//  * Spread Operator: this is use to extend an array into it's element
//  */
// // const arr = [7,8,9,10]//assuming we want to make another array of this. We can do it manually by
// // const newBadArr = [1,2,3,4,5,6,arr[0],arr[1],arr[2],arr[3]]
// // console.log(newBadArr)
// // //A better way will be to use the spread operator
// // const newArr = [ 1,2,3,4,5,6, ... arr]
// // console.log(newArr);
// // //It can be use to turn arrays into individual elements
// // console.log(... newArr)
// // //Example 2
// // const newMenu = [...restaurant.mainMenu,'egusi soup']
// // console.log(newMenu);
// //spread operator is similar to destructuring, but the only difference is that it
// //doesnt create new variables but instead work as if you are writing new elements separated
// //by commas
// //------------------------------USES CASES------------------
// //1. To create shallow copies of an array
// const mainMenu = [...restaurant.mainMenu]
// console.log(mainMenu);

// //2. To join to arrays together
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(menu);
// //It works on all Iterables: arrays, strings, maps, sets but not objects
// const str = 'Frank';
// console.log([...str, " ", 's.'])
// //NOTE: spread operator can't be used in ${...}.Because this doesn't expect values separated by commas

// // const ingredients = [prompt("Let's make pasta! ingredients 1?"),
// // // prompt("ingredient 2"), prompt("ingredient 3")]
// // console.log(ingredients);
// // //the spread operator can be used to pass arguments in a function
// // restaurant.orderPasta(...ingredients)

// //We can use it also to make new objects from existing ones
// const newRestaurant = {founded:1994, founder:"Frank", ...restaurant}
// console.log(newRestaurant);
// //we can use it to make a copy of an object
// const restaurantCopy = {...restaurant}
// console.log(restaurantCopy);
// //we can change the value of one and it won't affect the other
// restaurantCopy.name = "Good food"
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// /**
//  * ------------------THE REST PATTERN AND PARAMETERS------------------------------
//  * This is similar to spread pattern only that it does the opposite, it condense elements
//  * into an array and it's normally on the left side of the assignment
//  */
// const arr =[1,2,...[3,4,5]]
// console.log(arr);
// const [a,b,c, ...others]= [1,2,3,4,5,6,7,8,9,10];
// console.log(a,b,c, others);
// //so basically we can use both the spread and the rest pattern in one operation.
// //NOTE:the rest pattern must be the last.
// const[pizza, , resotto, ...otherFood]= [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza,resotto,otherFood);

// //destructuring an object using the rest patterns, we have to use the actual names with obj
// const {sat, ...weekdays} = restaurant.openingHours
// console.log(sat, weekdays);

// //another usecase of the rest pattern is it can be used in a function. we it's used, it's called
// //a rest parameters. Example
// const add = function(...num){
//   let sum = 0;
//   for(let i = 0; i < num.length; i++){
//     sum+=num[i]
//   }
//   return console.log(sum)
//  }
// add(1,2,4)
// add(23,45,78)
// const x = [12,12]
// add(...x)

/**
 * SHORT CIRCUITING (&& AND ||)
 * We can use the || operator to return values that are not booleans, and also
 */
// the || operator returns the first value that is a truthy value and if they are both falsy, it will return the other one
// console.log(23 || "Frank");
// console.log("" || 'Frank');
// console.log(false || 0)
// console.log(undefined || null);
// console.log(null || undefined);
// console.log(null || undefined || "" || "Frank" || true)
// //This can be used to avoid writing long if else statements.
// restaurant.numOfGuest = 0

// const numOfGuest = restaurant.numOfGuest || 10//this works if the restaurant.numOfGuest is undefined then 10 will be assigned
//                                               //if it does exist then the value will be assigned
// //NOTE: If the restaurant.numOfGuest value is 0, then it will not work it will take the 10 over the 0 because its a falsy value

// console.log(numOfGuest)

//------------------THE && OPERATOR
// //It works exactly opposite of the || operator. It returns the falsy value and they are both true it returns the second value
// console.log("" && "James")
// console.log(undefined && "James")
// console.log("" == false)
// //remember && will return false if one of the value is false. So it will return the falsy value
// console.log("James" && "Micaheal" && true && NaN && undefined)
// console.log(typeof(NaN))
// //another usecase is if you can you use it to check if a function exist
// if(restaurant.orderPizza){
//   restaurant.orderPizza("mushrooms", "pasta")
// }
// //we can do this using the && operator
// restaurant.orderPizza && restaurant.orderPizza('pasta', "mushrooms")

// /**
//  * ------------ THE NULLISH COALESCING OPERATOR (??)-----
//  * It works the same way as || operator only it doesn't return false for 0 and and empty strings only for null and undefined
//  *
//  */
// const correctNumOfGuest = restaurant.numOfGuest ?? 10
// console.log(correctNumOfGuest)

/**
 * ---------------LOGICAL ASSIGNMENT OPERATOR -------------------
 * It assign a value to a variable if the value is currently falsy
 */
//Example
const rest1 = {
  name: "life is good",
  numGuest: 0,
};
const rest2 = {
  name: "Food is ready",
  fonder: "Frank",
};
// rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest = rest2.numGuest || 10

//Now we can do the same thing using  an OR Assignment  operator
// rest1.numGuest ||= 10;
// rest2.numGuest ||=10;
// console.log(rest1.numGuest);
// console.log(rest2.numGuest);
//The above code works well but if the value of numGuest is zero it will return a falsy value, which will inturn affects
//our operation to avoid this we use a  nullish coalescing assignment

//-------------------NULLISH COALESCING ASSIGNMENT
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1.numGuest);
console.log(rest2.numGuest);

//--------------------------- AND ASSIGNMENT

rest1.fonder &&= "<Anonymous>"; //It will return the first falsy value which is undefined since it doesn't exist
rest2.fonder &&= "<Anonymous>";
console.log(rest1.fonder);
console.log(rest2.fonder);
