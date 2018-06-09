  $(document).ready(function () {
    thermostat = new Thermostat();
    $(".current_temperature").text(thermostat.temperature);
    updateTemp();
    getWeatherApi();
    checkSafeMode();
  });

function getWeatherApi() {
  $.get("http://localhost:8000/", function (apiData) {
    $('.outside').html(apiData);
  });
}

function updateTemp() {

  $(".increase").click(function () {
    thermostat.increase();
    checkSafeMode();
    checkEnergyLevel();
    $(".current_temperature").text(thermostat.temperature);
  });

  $(".decrease").click(function () {
    thermostat.decrease();
    checkSafeMode();
    checkEnergyLevel();
    $(".current_temperature").text(thermostat.temperature);
  });

  $(".reset_temperature").click(function () {
    thermostat.resetTemperature();
    checkSafeMode();
    checkEnergyLevel();
    $(".current_temperature").text(thermostat.temperature);
  });
}

function checkSafeMode() {
  thermostat.checkSafeMode();
  if (thermostat.safeMode == false) {
    document.getElementById('safe_mode').style.background = "red";
  }
  else {
    document.getElementById('safe_mode').style.background = "green";
  }
}

function checkEnergyLevel() {
  thermostat.checkPowerUsage();
  if (thermostat.energyLevel == "high") {
    document.getElementById("power_usage").style.background = "red";
  }
  else if (thermostat.energyLevel == "medium") {
    document.getElementById("power_usage").style.background = "orange";
  }
  else {
    document.getElementById("power_usage").style.background = "green";
  }

}

  if (thermostat.temperature <= 10) {
    $(".error_message").text(thermostat.errorMessage);
  }

  if (thermostat.temperature > 10) {
     $(".error_message").text("");
  }


  
 




  

  
