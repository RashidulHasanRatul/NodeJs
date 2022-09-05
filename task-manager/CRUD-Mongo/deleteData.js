const { MongoClient, ObjectId } = require("mongodb");
// we can use local host instead of 127.0.0.1 IP address
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "CRUD-Mongo";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly!");
    const db = client.db(databaseName);
    // Delete Many
    db.collection("users")
      .deleteMany({ age: 25 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
