const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const { getRecipes } = require('./handlers')

const port = 8000;

express()

    .use(helmet())
    .use(morgan('tiny'))

    .get("/hello", (req, res) => {
        res.status(200).json({ status: 200, message: "Hi!" })
    })

    .get("/api/addrecipe", getRecipes)

    .listen(8000, () => {
  console.log(`Server launched on port ${port}`)
});
