const { Router } = require('express')
const router = Router()

const {
    newVisitor
} = require('./controller')

// router.get('/', (req, res) => {
//     res.send("<h1>Hola</h1> " + req.query.name)}) 
router.get('/', newVisitor)

module.exports = router