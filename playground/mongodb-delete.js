const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) return console.log("Error connecting to DB :(");
    console.log("Connected to MongoDB");
    const db = client.db("Todo");

    // delete many
    db.collection("Todos").deleteMany({text: "Something to do"}).then((result) => {
        console.log(result);
    });

    // delete one
    db.collection("Todos").deleteOne({text: "Something to do"}).then((result) => {
        console.log(result);
    });

    // find one and delete
    db.collection("Todos").findOneAndDelete({completed: "false"}).then((result) => {
        console.log(result);
    });



    db.collection("Users").deleteMany({name: "Harry"}).then((result) => {
        console.log(result);
    });

    db.collection("Users").findOneAndDelete({_id: new ObjectID("5b4aad76d64a792dbb601de9")}).then((result) => {
        console.log(result);
    });

    client.close();
});
