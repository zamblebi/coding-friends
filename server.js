const express = require('express')
const app = express();

const ejs = require('ejs')

//set up view engin ejs
app.set('view engine', 'ejs')


//route 
app.get('/', function(req,res){
    res.render('pages/index')
})

app.get('/support', function(req,res){
    res.render('pages/support')
})

app.listen(3000,function(){
    console.log('Le port est ecouter sur 3000')
})