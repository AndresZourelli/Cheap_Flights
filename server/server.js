require('dotenv').config();
const express = require('express');
const app = express();
const knex = require('knex');
const cors = require('cors');
const bodyParser = require('body-parser');

// enable all CORS requests
app.use(cors());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

const db = knex({
  client: 'pg',
  connection: {
  user: process.env.DB_User,
  host: process.env.DB_host,
  database: process.env.DB,
  password: process.env.DB_password,
  port: process.env.DB_Port,
  ssl:true,
debug: true},
});

app.listen(5000,()=> console.log('Listening on port 5000'))

app.post('/NewFlights',data =>{
	console.log(data.body);
	db.schema.hasTable('boston').then(res=>console.log(res))
	})
	
app.get('/boston', (req,res,next) =>{
  db.select('*').table('boston').then(ress=> { res.json({payload: ress})})
})