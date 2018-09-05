describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land', 'takeoff']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    spyOn(Math, "random").and.returnValue(1)
    airport.clearForLanding(plane);
    console.log(airport.isStormy());
    expect(airport.planes()).toContain(plane);
  });

  it('can clear planes for takeoff', function(){
    spyOn(Math, "random").and.returnValue(1)
    airport.clearForTakeoff(plane);
    expect(airport.planes()).not.toEqual([plane]);
  });

  it('can check for stormy weather', function(){
    spyOn(Math, "random").and.returnValue(0)
    expect(airport.isStormy()).toBe(true);
  })

  it('can not clear planes for landing in stormy weather', function(){
    spyOn(Math, "random").and.returnValue(0)
    expect(airport.clearForLanding(plane)).toEqual('stormy weather');
  });

});
