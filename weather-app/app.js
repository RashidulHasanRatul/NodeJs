const request = require("request");

const url =
  "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=6b743cb653f5a9be6c374e981242247d";

request({ url: url, json: true }, (error, response, body) => {
  if (error) {
    console.log("Error:", error);
  } else {
    //console.log("Body:", body);
    //console.log("Response:", response);
    // get name of city
    //const city = JSON.parse(body);
    //console.log(city[0].name);
    //const city = body[0].name;
    const cityWeatherInfo = body[2];
    console.log(
      "The weather in " +
        cityWeatherInfo.name +
        " is " +
        cityWeatherInfo.lat +
        " degrees and lon is " +
        cityWeatherInfo.lon
    );
    console.log(cityWeatherInfo);
  }
});
