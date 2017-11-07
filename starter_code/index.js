"use strict";
const Elevator = require('./elevator.js');
const Person = require('./person.js');




const person = new Person("Jaime", 4, 9);


const elevator = new Elevator();
elevator.log();
console.log(elevator.requests);
