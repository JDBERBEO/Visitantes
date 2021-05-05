
const Visitor = require('./Visitor')

const newVisitor = async (req, res) => {
    //console.log('hola desde controller ')
    const visitor = new Visitor({name : req.query.name,})
    
    await visitor.save()
    //console.log('visitor created')
    res.send('<h1>El visitante fue almacenado con éxito</h1>')
}

module.exports = {
    newVisitor
}