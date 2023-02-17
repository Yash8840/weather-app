const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a007340cc2msh6635b3703b2e977p1c4177jsn8b1f26a8649c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  city_name.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;// we note here that document.getID likhna hi ni pada
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      document.getElementById("min_temp").innerHTML = response.min_temp;
      sunrise.innerHTML = unixTime(response.sunrise);
      sunset.innerHTML = unixTime(response.sunset);
      // wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      console.log(unixTime(response.sunrise));
      console.log(response);
    })
    .catch((err) => console.error(err));
};
document.getElementById('submit').addEventListener('click' , (e)=>{
  e.preventDefault();
  let value = e.target.previousElementSibling.value;
  getWeather(value);
})
//for by-default weather when the screen is loaded:=
getWeather('Delhi');

//function to convert time from millisecons to hours and minutes format
function unixTime(unixtime) {

  var u = new Date(unixtime*1000);

    return ('0' + u.getUTCHours()).slice(-2) +
      ':' + ('0' + u.getUTCMinutes()).slice(-2) +
      ':' + ('0' + u.getUTCSeconds()).slice(-2); 
  };



