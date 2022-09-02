const weatherDisplay = document.querySelector("#weather");

const url = "http://localhost:8001/weather";
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    weatherDisplay.innerHTML = `<p>${
      "lan" + data[0].lat + "lon" + data[0].lon
    }</p>`;
    console.log(data[0]);
  })
  .catch((error) => {
    console.log(error);
  });
