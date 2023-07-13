const apikey ="42f0eced317682ff9f955e1ff77c8fd8" 
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-bar");
const searchbtn = document.querySelector(".search button");


async function checkWeather(city){
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
 document.querySelector(".city").innerHTML = "Weather in "+data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °c";
 document.querySelector(".description").innerHTML = data.weather[0].description;
 document.querySelector(".humidity").innerHTML = "Humidity : "+data.main.humidity+"%";
 document.querySelector(".wind").innerHTML = "Wind Speed : "+data.wind.speed+" Km/h";
}



searchbtn.addEventListener("click",()=>{
  checkWeather(searchbox.value);
})