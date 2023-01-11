const debug=require('debug')('app:startup')
const morgan=require('morgan')
const helmet=require('helmet')
const Joi = require('joi');
const logger=require('./middleware/logger')
const courses=require('./routes/courses')
const home=require('./routes/home')
const authentication=require('./authentication')
const express = require('express');
const app = express();

app.set('view engine','pug')
app.set('views','./views')
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(helmet());
app.use('/api/courses',courses)
app.use('/','home')

//
const config=require('config')
console.log(`NODE_ENV:${process.env.NODE_ENV}`)
console.log(`app:${app.get('env')}`)
//configuration 
console.log("Application Name:"+config.get('name'))
console.log("Mail Server:"+config.get('mail.host'))
// console.log("Mail Password:"+config.get('mail.password'))
if(app.get('env')==='development'){
    app.use(morgan('tiny'))
    debug('Morgan enabled...')

}


app.use(logger);
app.use(authentication);

//PORTS
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...`));
