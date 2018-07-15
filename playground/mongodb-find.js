const {MongoClient, ObjectID} = require("mongodb");

const name = "Harry";

MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) {
        return console.log("Unable to connect :(");
    }
    console.log("Connected to MongoDB!");
    const db = client.db("Todo");

    // db.collection("Todos").find({
    //     _id: new ObjectID("5b4aa671a2e8cc2d9485d458")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos :(", err);
    // });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log("Unable to fetch todos :(", err);
    // });

    db.collection("Users").find({name}).toArray().then((docs) => {
        console.log(`Users named ${name}:`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users :(", err);
    });

    client.close();
});
