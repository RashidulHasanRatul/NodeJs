const PORT = 8001;
const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const url =
  "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=6b743cb653f5a9be6c374e981242247d";
app.get("/weather", (req, res) => {
  // if(!req.query.id){
  //   res.send({error:"you must need ID"})
  // }
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
      //   res.send("Hello World");
    })
    .catch((error) => {
      console.log(error);
    })

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
