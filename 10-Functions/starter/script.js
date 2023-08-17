'use strict';
// Default Parameters with Functions
/*

const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    // Setting default values => ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
      flightNum,
      numPassengers,
      price,
    };
    console.log(booking)
    bookings.push(booking);
}
createBooking("LH123")
createBooking("LH123", 2, 800)
createBooking("LH123", 2)
console.log(bookings);

*/


// How Passing Arguments Works: Values vs. Reference
/*

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
// checkIn(flight, jonas);

*/


// Functions Accepting Callback Functions
/*

// Creating a function to remove all spaces in a string
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Creating a function to capitalize the first word in a string
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Functions
// Creating a function to pass in function as an argument to a function
// The function called is known as Higher Order Function
// The function passed in a function is known as call-back function
const transformer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`)
}

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// Another Example
// Passing function as an argument to an eventListener function
const high5 = function(){
  console.log('👋');
}
document.body.addEventListener('click', high5);

// Passing the function as to be executed for an array
['Jonas', 'Martha', 'John'].forEach(high5);

*/


// Functions Returning Functions
/*

const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`)
  }
}

const greeter = greet('Hey');
greeter('Jonas')
greeter('Orlah')

// Another method to call the functions
greet('Happy Birthday')('Mhizta Orlah');

const greet2 = greeting2 => (name2) => console.log(`${greeting2} ${name2}`)

greet2('Omo')('Oba');

*/


// The Call and Apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} flights ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  }
}

lufthansa.book(239, 'Okefolahan Olamide');
lufthansa.book(239, 'Mhizta Orlah');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;
// Does not work, cannot read properties of undefined due 2 d this keyword
// book(23, 'Sarah Williams')

// Call Method
book.call(eurowings, '001', "Okefolahan Olamide");
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}
book.call(swiss, '001', 'Okefolahan Olamide');

// Apply method
// The apply method works the same like as the call but takes in array as an argument after the object the this keyword points to
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Using the array on the call method by using the spread operator to spread the values in the array like normal variables
book.call(swiss, ...flightData);
