const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const PORT = process.env.PORT || 3000

const app = express()

//cors
app.use(cors())

//bodyParser
app.use(bodyParser.json())

//Import posts
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) =>{
  res.send('We are at home!')
})


//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  {useNewUrlParser: true, 
  useUnifiedTopology: true}, 
  () => {
  console.log('Connected to DB!')
})

//Listening server
app.listen(PORT, () => {
  console.log('Server has been started...')
})