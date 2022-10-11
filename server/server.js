const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');


const { getRecipes, createRecipe, getRecipeById, deleteRecipe, updateRecipe } = require('./handlers')

const port = 8000;

express()

    .use(express.urlencoded({ extended: true} ))
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


    .listen(8000, () => {
  console.log(`Server launched on port ${port}`)
});
