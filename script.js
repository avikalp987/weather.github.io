const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a609dd0d97mshd7f8a33c3dd10b9p125be7jsncd4c9c00e679',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pct.innerHTML=response.cloud_pct;
        temp.innerHTML=response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML=response.feels_like;
        humidity.innerHTML=response.humidity;
        humidity2.innerHTML=response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML=response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;

    })
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>
{
    e.preventDefault();
    getWeather(city.value);
})
getWeather("Delhi");
/*getWeather("Delhi");
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+"Shanghai", options)
    .then(response => response.json())
    .then(response=>{
        console.log(response);
        shan_cloud_pct.innerHTML = response.cloud_pct;
        shan_temp.innerHTML = response.temp;
        shan_feels_like.innerHTML = response.feels_like;
        shan_humidity.innerHTML = response.humidity;
        shan_min_temp.innerHTML = response.min_temp;
        shan_max_temp.innerHTML = response.max_temp;
        shan_wind_speed.innerHTML = response.wind_speed;
        shan_wind_degrees.innerHTML = response.wind_degrees;
        shan_sunrise.innerHTML = response.sunrise;
        shan_sunset.innerHTML = response.sunset;
    })
    */

const getCustomWeather = (customCity)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+customCity, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        document.querySelector("#"+customCity+"_cloud_pct").innerHTML = response.cloud_pct;
        document.querySelector("#"+customCity+"_temp").innerHTML = response.temp;
        document.querySelector("#"+customCity+"_feels_like").innerHTML = response.feels_like;
        document.querySelector("#"+customCity+"_humidity").innerHTML = response.humidity;
        document.querySelector("#"+customCity+"_min_temp").innerHTML = response.min_temp;
        document.querySelector("#"+customCity+"_max_temp").innerHTML = response.max_temp;
        document.querySelector("#"+customCity+"_wind_speed").innerHTML = response.wind_speed;
        document.querySelector("#"+customCity+"_wind_degrees").innerHTML = response.wind_degrees;
        document.querySelector("#"+customCity+"_sunrise").innerHTML = response.sunrise;
        document.querySelector("#"+customCity+"_sunset").innerHTML = response.sunset;
    })
}
getCustomWeather("Shanghai");
getCustomWeather("Boston");
getCustomWeather("London");

getCustomWeather("Mumbai");

getCustomWeather("Moscow");

getCustomWeather("Paris");



