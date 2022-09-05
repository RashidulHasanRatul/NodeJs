const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "CRUD-Mongo";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    // insert multiple users
    db.collection("Products").insertMany(
      [
        {
          ProductsName: "Mobile",
          quantity: 100,
        },
        {
          ProductsName: "Laptop",
          quantity: 6000,
        },
      ],
      (err, result) => {
        if (err) {
          return console.log("Unable to insert user");
        }
        console.log("Data inserted successfully!");
        console.log(result.ops);
      }
    );
  }
);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);

    //create a collection and insert single user
    db.collection("users").insertOne(
      {
        name: "Rashidul Hasan Ratul",
        age: 23,
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert user");
        }
        console.log("Data inserted successfully!");
        console.log(result.insertedId);
      }
    );

    // insert multiple users
    db.collection("users").insertMany(
      [
        {
          name: "Rahim",
          age: 25,
        },
        {
          name: "Karim",
          age: 25,
        },
      ],
      (err, result) => {
        if (err) {
          return console.log("Unable to insert user");
        }
        console.log("Data inserted successfully!");
        console.log(result.insertedId);
      }
    );
  }
);
