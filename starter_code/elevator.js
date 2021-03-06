"use strict";
const Person = require('./person.js');
class Elevator {
  constructor() {
    this.floor = 0;
    this.direction = "";

    this.MAXFLOOR = 10;
    this.requests = [];

    this._intervalID = null;
    this.waitingList = [];
    this.passengersIn = [];
  }

  start() {
    this._intervalID = setInterval(() => this.update(), 1000);
  }
  stop() {
    clearInterval(this._intervalID);
    //return this.requests;
  }
  update() {
    this.log();
  }
  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if (this.floor < 10) {
      return this.floor++;

    }

  }
  floorDown() {
    if (this.floor > 0) {
      return this.floor--;
    }

  }
  call(person) {
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction}, Position: ${this.floor}`);
  }
}

module.exports = Elevator;
