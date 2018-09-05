describe("Feature Test:", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("Under normal weather conditions", function() {

    it('planes can be instructed to land at an airport', function() {
      spyOn(airport,'isStormy').and.returnValue(false);
      plane.land(airport)
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to takeoff from an airport', function() {
      plane.land(airport)
      plane.takeoff(airport)
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe("Under stormy weather conditions", function() {

    beforeEach(function() {
      var mockedBoolean = null
      spyOn(airport,'isStormy').and.returnValue(mockedBoolean)
    });

    it('planes can not land in stormy weather', function () {
      mockedBoolean = true
      plane.land(airport)
      expect(airport.planes()).not.toContain(plane);
    });

    it('planes can not takeoff in stormy weather', function () {
      mockedBoolean = false
      plane.land(airport)
      mockedBoolean = true
      plane.takeoff(airport)
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
