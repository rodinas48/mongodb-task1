const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017"; //ip address

const dbName = "project-1"; // database name

mongoClient.connect(connectionUrl, (error, result1) => {
  if (error) {
    return console.log("error!!");
  }
  console.log("success!!");
  const db = result1.db(dbName);

  db.collection("users").insertOne(
    {
      name: "rodina sameh",
      age: 22,
    },
    (error, data) => {
      if (error) {
        console.log("error insert!!");
      }
      console.log(data.insertedId);
    }
  );
  db.collection("users").insertMany(
    [
      {
        name: "person1",
        age: 30,
      },
      {
        name: "person2",
        age: 20,
      },
      {
        name: "person3",
        age: 24,
      },
      {
        name: "person4",
        age: 22,
      },
      {
        name: "person5",
        age: 28,
      },
    ],
    (error, data) => {
      if (error) {
        console.log("insert error!!");
      }
      console.log(data.insertedCount);
    }
  );
  db.collection("users").findOne(
    {
      _id: mongodb.ObjectId("65fb3af50d1d12e7fb11126f"),
    },
    (error, user) => {
      if (error) {
        console.log("find error!!");
      }
      console.log(user);
    }
  );
  db.collection("users")
    .find({ age: 24 })
    .limit(3)
    .toArray((error, users) => {
      if (error) {
        return console.log("find limit error !!");
      }
      console.log(users);
    });

  db.collection("users")
    .find({ age: 24 })
    .limit(3)
    .count((error, users) => {
      if (error) {
        return console.log("find limit error !!");
      }
      console.log(users);
    });
});
