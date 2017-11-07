"use strict";
const Elevator = require('./elevator.js');
const Person = require('./person.js');




const jaime = new Person("Jaime", 4, 9);
const clara = new Person("Clara", 5, 1);



const elevator = new Elevator();
elevator.log();
console.log(elevator.request);
elevator.call(jaime);
