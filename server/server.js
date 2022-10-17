'use strict'

const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const {
    getRecipes,
    createRecipe,
    getRecipeById,
    deleteRecipe,
    updateRecipe,
    getUsers,
    createUser,
    getUserByEmail,
    getRecipesByUser,
} = require('./handlers')

const port = 8000

express()
    .use(express.json())
    .use(helmet())
    .use(morgan('tiny'))

    .get('/hello', (req, res) => {
        res.status(200).json({ status: 200, message: 'Hi!' })
    })

    .get('/api/addrecipe', getRecipes)
    .post('/api/addrecipe', createRecipe)
    .get('/api/addrecipe/:_id', getRecipeById)
    .get('/api/user-recipes/:email', getRecipesByUser)
    .delete('/api/addrecipe/:_id', deleteRecipe)
    .put('/api/addrecipe/:id', updateRecipe)

    .get('/api/get-users', getUsers)
    .get('/api/get-user/:userEmail', getUserByEmail)
    .post('/api/create-user', createUser)

    .options('/api/addrecipe', cors())
    .options('/api/addrecipe/:id', cors())
    .options('/api/user-recipes', cors())

    .options('/api/get-users', cors())
    .options('/api/get-user', cors())
    .options('/api/create-user', cors())

    .listen(8000, () => {
        console.log(`Server launched on port ${port}`)
    })
