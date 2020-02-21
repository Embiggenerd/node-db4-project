const express = require('express')

const server = express()

server.use(express.json())

// const { recipeRouter, ingredientsRouter, stepsRouter} = require('./routes')

// server.use('/recipes', recipeRouter)
// server.use('/ingredients',ingredientsRouter)
// server.use('/steps', stepsRouter)

server.use((err, req, res, next)=>{
    res.status(err.httpStatusCode || 500).json({
        message: err.message
    })
})

module.exports = server