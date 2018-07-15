const {MongoClient, ObjectID} = require("mongodb");

// console.log(new ObjectID());

MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
    if (err) {
        return console.log("Unable to connect :(");
    }
    console.log("Connected to MongoDB!");
    const db = client.db("Todo");

    db.collection("Todos").insertOne({
        text: "Something to do",
        completed: false
    }, (err, result) => {
        if (err){
            return console.log("Unable to insert todo", err);
        }

        //ops contains all the documents that were inserted
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    // db.collection("Users").insertOne({
    //     name: "Harry",
    //     age: "21",
    //     location: "San Francisco"
    // }, (err, result) => {
    //     if (err){
    //         return console.log("Unable to insert todo", err);
    //     }
    //
    //     //ops contains all the documents that were inserted
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })


    client.close();
});
