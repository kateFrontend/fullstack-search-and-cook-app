const recipes = require("./data/data.json");
//console.log(recipes)

const { MongoClient } = require("mongodb")

require("dotenv").config();
const { MONGO_URI } = process.env;
//console.log(MONGO_URI)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
const batchImport = async (dbName) => {
    
    const client = new MongoClient(MONGO_URI, options);
    try{

        await client.connect();

        const db = client.db("SeachAndCook");
        console.log("connected!");

        const result = await db.collection("recipes").insertMany(recipes);
        console.log(result)

       
    } catch (err) {
        console.log(err.stack);
    }

    client.close()
    console.log("disconnected!");
}


batchImport()


//node server/batchImport.js