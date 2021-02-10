'use strict';

describe('Weather',function(){

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('occasionally gives stormy weather',function(){
    spyOn(Math, 'random').and.returnValue(1);
    expect(weather.isStormy()).toBeTruthy;
  });

  it('occasionally gives sunny weather',function(){
    spyOn(Math, 'random').and.returnValue(0);
    expect(weather.isStormy()).toBeFalsy;
  });

});
