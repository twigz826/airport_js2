'use strict';

describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpy('plane',['land']);
    weather = jasmine.createSpyObj('weather',['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('in sunny conditions',function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane])
    });

    it('can clear planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);

    });

  });

  describe('under stormy conditions', function(){

    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });

    it('blocks takeoff when weather is stormy', function(){
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('Cannot takeoff during a storm')
    });

    it('blocks landing when weather is stormy', function(){
      expect(function() { airport.clearForLanding(plane); }).toThrowError('Cannot land during a storm')
    });

  });

});
