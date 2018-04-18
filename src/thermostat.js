
function Thermostat() {}
function TempController() {}
function CheckTemp() {}

Thermostat.prototype.temperature = 30;
Thermostat.prototype.safeMode = true;

Thermostat.prototype.checkSafeMode = (function() {
  if (this.temperature >= 26) {
    this.safeMode = false;
  }
});

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

TempController.prototype.increase = function (temp) { return (temp + 2); };
TempController.prototype.decrease = function (temp) { return (temp - 2); };

CheckTemp.prototype.checkMin = function (temp) { 
  if (temp <= 10) { throw new Error ("temperature is too low. ensure temperature > 10");}
};

