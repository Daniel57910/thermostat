function Thermostat() {
  this.temperature = 30;
  this.safeMode = true;
  this.energyLevel = "low";
  this.errorMessage = "Warning. Temperature cannot go <= 10";
}

Thermostat.prototype.checkSafeMode = function () {
  if (this.temperature >= 26) {
    this.safeMode = false; 
  }
  else {
    this.safeMode = true;
  }
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

Thermostat.prototype.increase = function () {
  this.temperature += 2;
};

Thermostat.prototype.decrease = function () {
  this.temperature -= 2;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = 20;
};

