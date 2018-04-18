  
  describe("Thermostat", function() {

    beforeEach(function () {
      thermostat = new Thermostat();
    });

    it("sets the default temperature of the thermostat to 30", function() {
      expect(thermostat.temperature).toEqual(30); 
    });

    it("sets power saving mode to be on by default", function() {
      expect(thermostat.safeMode).toEqual(true);
    });

     it("returns false if temperature is 26", function () {
      safeMode = new Thermostat();
      safeMode.temperature = 26;
      safeMode.checkSafeMode();
      expect(safeMode.safeMode).toEqual(false);
     });

   
     it("returns false if the temperature is 32", function() {
       safeMode = new Thermostat();
       safeMode.temperature = 21;
       safeMode.temperature = 32;
       safeMode.checkSafeMode();
       expect(safeMode.safeMode).toEqual(false);
     });

     it("resets the temperature to 20", function() {
       thermostat.resetTemperature();
       expect(thermostat.temperature).toEqual(20);
     });

     
     it("sets the energy usage of the system to high if temperature > 25", function() {
      thermostat.temperature = 26;
      thermostat.checkPowerUsage();
      expect(thermostat.energyLevel).toEqual("high");
     });

    it("sets the energy usage of the system to low if temperature < 18", function () {
      thermostat.temperature = 17;
      thermostat.checkPowerUsage();
      expect(thermostat.energyLevel).toEqual("low");
    });

    it("sets the energy usage of the system to mid if temperature > 18 && < 25", function () {
      thermostat.temperature = 21;
      thermostat.checkPowerUsage();
      expect(thermostat.energyLevel).toEqual("medium");
    });

  });

  describe("TempController", function() {

    beforeEach(function () {
      Temp = new TempController();
    });

    it("allows you to increase  temperature of the thermostat", function() {
      expect(Temp.increase(30)).toEqual(32);
    });

    it("allows you to decrease the temperature of the thermostat", function () {
      expect(Temp.decrease(30)).toEqual(28);
    });

  });
  
  describe ("CheckTemp", function() {
    it("throws an error if the temperature goes below 10", function() {
      thermo = new Thermostat();
      checkTemp = new CheckTemp();
      thermo.temperature = 10;
      test = thermo.temperature;
      expect(function(){checkTemp.checkMin(test);}).toThrowError(("temperature is too low. ensure temperature > 10"));
    });
  });




 
