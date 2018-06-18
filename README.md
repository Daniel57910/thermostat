**Thermostat Project**

The thermostat is the first application I wrote and test-drove in Javascript. The user is able to increase and decrease the temperature of the thermostat.

Depending on the current temperature of the thermostat, safe mode is triggered. If the temperature is over 26, safe mode is triggered and turns red. There is also three power levels: low, medium and high. High power level is triggered after a temperature of 26. Medium power level is triggered when the temperature is between 26 and 18. If the temperature is below 18 the power status is set to low. 

If the temperature drops below 11, a warning message flashes on the screen.

Through integrating the open weather API into the app, you can see the temperature in London and adapt the thermostat to match the API data.

**Approach To The Project**

There is a thermostat class with a temperature variable. As part of the class there are functions to increase and decrease the temperature. There is also a reset function to set the temperature to 20,

When the temperature is at certain states, power status, safe mode and warnings are triggered. The temperature is increased through the web page. Upon clicking on the temperature buttons, the state of safe mode and the power status are modified.

Initially the API was hosted in the application front-end. This is not secure as it means people can open up the developer tools and take the API key. To improve the security of the app the thermostat page makes a GET request to a simple ruby application that retrieves the API data. That way the app is able to obtain the data in a more secure way.

**Testing**

The app is tested using Jasmine. Changing the temperature of the thermostat is tested and the changing state of power usage and safe mode is also tested.

**How To Run The App**

* Ensure you have ruby 2.5.0 installed on your computer
* Change into the bin directory
* Run bundle install to install the necessary ruby dependencies
* Change back to the root of the app
* Run rackup bin/lib/app.rb to setup the ruby server
* Open up index.html
* Play with the thermostat!

