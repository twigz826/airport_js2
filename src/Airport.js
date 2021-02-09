'use strict';

class Airport{

  constructor(){
    this._hangar = []
  }

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    if(this.isStormy()) {
      throw new Error('Cannot land during a storm')
    }
    this._hangar.push(plane);
  };

  clearForTakeoff(plane) {
    if(this.isStormy()) {
      throw new Error('Cannot takeoff during a storm')
    }
    this._hangar = [];
  };

  isStormy() {
    return false
  };
};

// tt
