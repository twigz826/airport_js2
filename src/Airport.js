'use strict';

class Airport{

  constructor(weather){
    this._hangar = []
    this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  };

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    if(this._weather.isStormy()) {
      throw new Error('Cannot land during a storm')
    }
    this._hangar.push(plane);
  };

  clearForTakeoff(plane) {
    if(this._weather.isStormy()) {
      throw new Error('Cannot takeoff during a storm')
    }
    this._hangar = [];
  };

  // isStormy() {
  //   return false
  // };
};
