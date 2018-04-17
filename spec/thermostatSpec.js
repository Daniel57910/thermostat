  describe("Airport", function() {
    it("sets the default capacity of the airport to 20", function() {
      myAirport = new Airport();
      expect(myAirport.CAPACITY).toEqual(20);
    });

    it("allows the user to update capacity of the airport", function() {
      myAirport = new Airport(30);
      expect(myAirport.CAPACITY).toEqual(30);
    });

  });

  describe("Weather", function() {

    it("returns false if the weather is good", function() {
      airport= new Airport();
      spyOn(Math,'random').and.returnValue(1);
      expect(airport.isStormy()).toEqual(false);
    });

    it("returns true if the weather is bad", function() {
      airport = new Airport();
      spyOn(Math,'random').and.returnValue(0);
      expect(airport.isStormy()).toEqual(true);
    });
  });
