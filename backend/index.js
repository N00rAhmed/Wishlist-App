const express = require("express");
const app = express();
const port = 4000;

const cors = require('cors')
const { MongoClient } = require('mongodb');
require('dotenv').config()
// const uri = "mongodb+srv://tronn232003_db_user:q8KuFPMuMqDfteSS@wishlist-cluster.3gbe0p7.mongodb.net/?appName=wishlist-cluster"

// let db, dbConnectionString = 
// process.env.DB_STRING, 
// dbName = 'wishlist-db', 
// collection

let db; // db name
dbConnectionString = process.env.DB_STRING
dbName = 'wishlist-db'
let collection; // collection name


MongoClient.connect(dbConnectionString).then(client => {
  console.log(`Connected to the ${dbName} database`)
  db = client.db(dbName) // once connected, assign the connection to the global variable
  collection = db.collection('wishlist-collection')
})

app.get("/all", async(req, res) => {
  const userdata =  await collection.find().toArray();
  res.send(userdata);
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});