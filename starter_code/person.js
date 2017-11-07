"use strict";
const Elevator = require('./elevator.js');
class Person {

  constructor(name, originFloor, destinationFloor) {

    this.name = "";
    this.originFloor = null;
    this.destinationFloor = null;
  }

  logRequest() {
    Elevator.requests.push(this);

  }
}

module.exports = Person;
