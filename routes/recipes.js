const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json('recipe')
})

module.exports = router