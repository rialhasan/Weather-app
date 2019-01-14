$(document).ready(function(){

    var lat = 0;
    var long = 0;
    navigator.geolocation.getCurrentPosition(function(data){

       lat =  data.coords.latitude;
       long = data.coords.longitude;

    

       var URL = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long+"";

       $.getJSON(URL, function(data){

           var apitemp = data.main.temp;
           var apicity = data.name;
           var apidesc = data.weather[0].description;

           
           document.getElementById('city').innerHTML = apicity;
           document.getElementById('temp').innerHTML = apitemp;
           document.getElementById('desc').innerHTML = apidesc;
           
       });

    });

});