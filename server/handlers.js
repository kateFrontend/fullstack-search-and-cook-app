'use strict'

const { uuid } = require('uuidv4')

const bodyParser = require('body-parser')

const { MongoClient } = require('mongodb')
require('dotenv').config()
const { MONGO_URI } = process.env
//console.log(MONGO_URI)

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const getUsers = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)
    try {
        await client.connect()
        console.log('connected')
        const db = client.db('SeachAndCook')
        const result = await db.collection('users').find({}).toArray()

        result
            ? res.status(200).json({ status: 200, result, message: 'Success' })
            : res.status(404).json({ status: 404, message: 'Bad news' })
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message,
        })
    }
    client.close()
    console.log('disconnected!')
}

//////////////////////////////////////////////////////////////////

const getUserByEmail = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect()
        const db = client.db('SeachAndCook')
        const { userEmail } = req.params
        console.log(req.params)

        const result = await db
            .collection('users')
            .findOne({ userEmail: userEmail })

        result
            ? res
                  .status(200)
                  .json({ status: 200, data: result, message: 'Success' })
            : res.status(404).json({ status: 404, message: 'Bad news' })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            data: usreEmail,
            message: err.message,
        })
    } finally {
        client.close()
    }
}

//////////////////////////////////////////////////////////////

const createUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect()
        console.log('connected')
        const { userEmail, name } = req.body
        console.log(req.body)
        const db = client.db('SeachAndCook')
        const _id = uuid()

        const newUser = {
            userEmail,
            name,
        }

        const result = await db.collection('users').insertOne(newUser)

        result
            ? res.status(200).json({ status: 200, result, message: 'Success' })
            : res.status(404).json({ status: 404, message: 'Bad news' })
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
    client.close()
    console.log('disconnected!')
}

//////////////////////////////////////////////////////////////

const getRecipes = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect()
        console.log('connected')

        const db = client.db('SeachAndCook')

        const result = await db.collection('recipes').find({}).toArray()

        result
            ? res.status(200).json({ status: 200, result, message: 'Success' })
            : res.status(404).json({ status: 404, message: 'Bad news' })
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message,
        })
    }
    client.close()
    console.log('disconnected!')
}

///////////////////////////////////////////////////////////////////////////////

const createRecipe = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect()
        console.log('connected')
        const { name, description, ingredients, instructions, userEmail } =
            req.body
        const db = client.db('SeachAndCook')
        const _id = uuid()
        console.log(req.body)

        const newRecipe = {
            _id,
            name,
            description,
            ingredients,
            instructions,
            userEmail,
        }
        const result = await db.collection('recipes').insertOne(newRecipe)

        result
            ? res.status(200).json({ status: 200, result, message: 'Success' })
            : res.status(404).json({ status: 400, message: 'Bad news' })
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
    client.close()
    console.log('disconnected!')
}

//////////////////////////////////////////////////////////////////

const getRecipeById = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect()

        const db = client.db('SeachAndCook')

        const { _id } = req.params

        const result = await db.collection('recipes').findOne({ _id })

        result
            ? res.status(200).json({ status: 200, result, message: 'Success' })
            : res.status(400).json({ status: 400, message: 'Bad news' })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message,
        })
    } finally {
        client.close()
    }
}

//////////////////////////////////////////////////////////////////

const getRecipesByUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect()
        const db = client.db('SeachAndCook')
        const { email } = req.params
        console.log(req.params)

        const query = { userEmail: email }
        const options = {
            projection: {
                _id: 1,
                name: 1,
                description: 1,
                ingredients: 1,
                instructions: 1,
            },
        }

        const result = await db
            .collection('recipes')
            .find(query, options)
            .toArray()

        result
            ? res.status(200).json({ status: 200, result, message: 'Success' })
            : res.status(400).json({ status: 400, message: 'Bad news' })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message,
        })
    } finally {
        client.close()
    }
}

///////////////////////////////////////////////////

const deleteRecipe = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)

    try {
        await client.connect()

        const { _id } = req.params

        const db = client.db('SeachAndCook')

        const result = await db.collection('recipes').deleteOne({ _id })

        result
            ? res
                  .status(200)
                  .json({ status: 200, data: 'Recipe deleted successfully' })
            : res.status(404).json({ status: 404, data: 'Recipe is not found' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: 500, message: err.message })
    } finally {
        client.close()
    }
}

const updateRecipe = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options)
    const { id } = req.params

    try {
        await client.connect()
        const db = client.db('SeachAndCook')
        const { userEmail, name, description, ingredients, instructions } = req
        const query = { id }

        console.log(req.params)

        let newValues = {
            $set: {
                _id: id,
                name: name,
                description: description,
                ingredients: ingredients,
                instructions: instructions,
                userEmail: userEmail,
            },
        }

        const result = await db
            .collection('recipes')
            .updateOne(query, newValues)

        result
            ? res.status(200).json({
                  status: 200,
                  data: req.body,
                  message: 'Recipe is updated',
              })
            : res.status(404).json({
                  status: 404,
                  data: req.body,
                  message: 'Recipe is not found',
              })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message,
        })
    } finally {
        // TODO: close...
        client.close()
    }
}

module.exports = {
    getRecipes,
    createRecipe,
    getRecipeById,
    deleteRecipe,
    updateRecipe,
    getUsers,
    getUserByEmail,
    createUser,
    getRecipesByUser,
}
