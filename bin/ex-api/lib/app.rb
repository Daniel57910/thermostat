require 'sinatra/base'
require 'rest-client'

class ThermoApi < Sinatra::Base 

   get '/' do 
      response['Access-Control-Allow-Origin'] = '*'
      RestClient.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fa3ac4b32c1ee6d52f9b77070788db7b&mode=html")
   end
end