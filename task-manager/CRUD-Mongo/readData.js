const { MongoClient, ObjectId } = require("mongodb");
// we can use local host instead of 127.0.0.1 IP address
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "CRUD-Mongo";

// connect to the database
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly!");
    const db = client.db(databaseName);
    // FInd one

    db.collection("users").findOne(
      { name: "Rashidul Hasan Ratul" },
      (error, user) => {
        if (error) {
          return console.log("Unable to fetch");
        }
        console.log(user);
      }
    );
  }
);
