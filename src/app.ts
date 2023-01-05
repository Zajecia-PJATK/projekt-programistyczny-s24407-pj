import app from "./server";
import {MongoClient} from "mongodb";
//import appDAO from "./dao/appDAO"

// Mongo credentials
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
// Connection URI
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@database.czdcboz.mongodb.net/?retryWrites=true&w=majority`
const port = 8000

// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    app.listen(port, () => {
      app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
    })

    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

