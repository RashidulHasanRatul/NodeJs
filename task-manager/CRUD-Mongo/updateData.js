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
    // Update Single User
    
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("6314fd7f50d791f91b753f56"),
    //     },
    //     {
    //       $set: { name: "RH Rashidul" },
    //       $inc: { age: 1 },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Update Many Users

    db.collection("users")
      .updateMany(
        {
          age: 25,
        },
        {
          $set: { name: "Older Than25" },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
