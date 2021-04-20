const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sourav Banerjee'
    })
})

app.get('/about',(req,res) => {
    res.render('about', {
        title:'About',
        name:'Sourav Banerjee'
    })
})

app.get('/help',(req,res) => {
    res.render('help', {
        title:'Help',
        name:'Sourav Banerjee'
    })
})

app.get('/weather',(req,res) => {
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    }
    res.send({
        weather: 'Your weather',
        address: req.query.address
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title:'404',
        name:'Sourav Banerjee',
        errorMessage:'Page not Found!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})