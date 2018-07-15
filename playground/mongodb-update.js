const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) return console.log("Error connecting to DB :(");
    console.log("Connected to MongoDB");
    const db = client.db("Todo");

    //find one and update
    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5b4aaaa155eb735b6ce22930"),

    }, {
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // change name and increment age
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b4ae27f55eb735b6ce22c80"),

    }, {
        $set: {
            name: "Harold"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});
