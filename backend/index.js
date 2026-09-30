const express = require("express");
const app = express();
const port = 4000;

const cors = require('cors')
const { MongoClient } = require('mongodb');


const Dataschema = require("./models/schema");

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

require('dotenv').config()


// const uri = "mongodb+srv://tronn232003_db_user:q8KuFPMuMqDfteSS@wishlist-cluster.3gbe0p7.mongodb.net/?appName=wishlist-cluster"

// let db, dbConnectionString = 
// process.env.DB_STRING, 
// dbName = 'wishlist-db', 
// collection

let db; // db name
let dbConnectionString = process.env.DB_STRING
let dbName = 'wishlist-db'
let collection; // collection name


MongoClient.connect(dbConnectionString).then(client => {
  console.log(`Connected to the ${dbName} database`)
  db = client.db(dbName) // once connected, assign the connection to the global variable
  collection = db.collection('wishlist-collection')
})

app.get("/all", async(req, res) => {
  const userdata =  await collection.find().toArray(); // .find finds all data and .toarray to get and render all of the data as array
  res.send(userdata);
})


app.post("/post", async(req, res) => {
  // Dataschema
  const data = new Dataschema({
    title : req.body.title,
    description : req.body.description
  });
    // const savedDetails = await data.save();         //TRY AND CATCH
    const savedDetails = await collection.insertOne(data);         //TRY AND CATCH
    res.send("All good");
  // let collection = await db.collection("wishlist-collection");
  // let newDocument = req.body;
  // let result = await collection.insertOne(newDocument);
  // res.send(result).status(204);
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});