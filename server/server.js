"use strict";

const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const { getRecipes, createRecipe, getRecipeById, deleteRecipe, updateRecipe, getUser, createUser } = require('./handlers')

const port = 8000;


express()

/*     .use(express.urlencoded({ extended: true} )) */
    .use(express.json())
    .use(helmet())
    .use(morgan('tiny'))


    .get("/hello", (req, res) => {
        res.status(200).json({ status: 200, message: "Hi!" })
    })

    .get("/api/addrecipe", getRecipes)
    .post("/api/addrecipe", createRecipe)
    .get("/api/addrecipe/:_id", getRecipeById)
    .delete("/api/addrecipe/:_id", deleteRecipe)
    .put("/api/addrecipe/:id", updateRecipe)

    .get("/api/get-user", getUser)
    .post("/api/create-user", createUser)



    .options('/api/addrecipe', cors())


    .listen(8000, () => {
  console.log(`Server launched on port ${port}`)
});
