
function Thermostat() { }
function TempController() { }
function CheckTemp() { }

Thermostat.prototype.temperature = 30;
Thermostat.prototype.safeMode = true;
Thermostat.prototype.energyLevel = "low";
Thermostat.prototype.errorMessage = "Warning. Temperature cannot go <= 10";

Thermostat.prototype.checkSafeMode = function () {
  if (this.temperature >= 26) {
    this.safeMode = false; 
  }
  else {
    this.safeMode = true;
  }
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};

Thermostat.prototype.checkPowerUsage = function () {
  if (this.temperature < 18) {
    this.energyLevel = "low";
  }
  else if (this.temperature > 18 && this.temperature < 25) {
    this.energyLevel = "medium";
  }
  else {
    this.energyLevel = "high";
  }
};

thermo = new Thermostat();
console.log(thermo.safeMode);
             
console.log(thermo.safeMode);

TempController.prototype.increase = function (temp) { return (temp + 2); };
TempController.prototype.decrease = function (temp) { return (temp - 2); };

CheckTemp.prototype.checkMin = function (temp) {
  if (temp <= 10) { throw new Error("temperature is too low. ensure temperature > 10"); }
};

