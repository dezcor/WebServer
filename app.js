const express = require('express')
const hbs = require('hbs')
const app = express()
//app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.render('home',
    {
        name:'Hola Majo'
    })
})
app.listen(3000,()=>{
    console.log('Ejecutando en el puerto 3000')
})