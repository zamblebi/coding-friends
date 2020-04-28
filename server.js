const express = require('express')
const app = express();
const path = require('path')

const ejs = require('ejs')

//use app

app.use(express.static('public'))



//set up view engin ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

//route 
// var title = 'Coding Friends Forum'
app.get('/', function(req,res){
    res.render('pages/index', {title:'Coding'})
})

app.get('/support', function(req,res){
    res.render('pages/support', {title: 'Support'})
})

app.listen(3000,function(){
    console.log('Le port est ecouter sur 3000')
})