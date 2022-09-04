// CRUD - create read update delete
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
const { MongoClient, ObjectId } = require("mongodb");
const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp);

// we can use local host instead of 127.0.0.1 IP address
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// connect to the database
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly!");
    // create a database
    const db = client.db(databaseName);

    // create a collection and insert single user
    // db.collection("users").insertOne(
    //   {
    //     name: "Rashidul Hasan Ratul",
    //     age: 23,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log("Data inserted successfully!");
    //     console.log(result.insertedId);
    //   }
    // );
    // =======================
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
