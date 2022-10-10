"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
//console.log(MONGO_URI)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};



const getRecipes = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    
    try{
        await client.connect();
        console.log("connected")

        const db = client.db("SeachAndCook");

        const result = await db 
        .collection("recipes").find({}).toArray();
        res.status(200).json({ status: 200, data: result});

    } catch (err){
        res.status(404).json({ status: 404, data: err });
    }
    client.close();
    console.log("disconnected!");  
}

module.exports = { getRecipes };
