'use strict';

describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land'])
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
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

  it('can check for stormy conditions',function(){
    expect(airport.isStormy()).toBeFalsy();
  })

  describe('under stormy conditions', function(){
    it('blocks takeoff when weather is stormy', function(){
      spyOn(airport, 'isStormy').and.returnValue(true)
      expect(function() { airport.clearForTakeoff(plane); }).toThrowError('Cannot takeoff during a storm')
    })

    it('blocks landing when weather is stormy', function(){
      spyOn(airport, 'isStormy').and.returnValue(true)
      expect(function() { airport.clearForLanding(plane); }).toThrowError('Cannot land during a storm')
    })
  })

});
