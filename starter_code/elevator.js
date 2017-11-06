"use strict";
class Elevator {
  constructor() {
    this.floor = 0;
    this.direction = "";

    this.MAXFLOOR = 10;
    this.requests = [];

    this._intervalID = null;
  }

  start() {
    this._intervalID = setInterval(this.update, 1000);
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
  call() {}
  log() {
    console.log(`Direction: ${this.direction}, Position: ${this.floor}`);
  }
}

module.exports = Elevator;
