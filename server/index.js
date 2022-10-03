const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');


express()

    .use(helmet())
    .use(morgan('tiny'))

    .get("/hello", (req, res) => {
        res.status(200).json({ status: 200, message: "Hi!" })
    })

    .listen(8000, () => {
  console.log(`Server launched on port ${port}`)
});
