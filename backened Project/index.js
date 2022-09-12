const express = require('express')
const authRouter = require('./routes/auth')
require('dotenv').config()
const { initDB } = require('./dbConfig')
const cookieParser = require('cookie-parser')
const medicineRouter = require('./routes/medicineData')
const app = express()
initDB()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static('public'))

app.get('/home', (req, res) => {
  res.send("Home Route")
})

//add auth routes
app.use('/', authRouter)
  
//medicines routes
app.use('/medicines',medicineRouter)
app.listen(8021, () => {
  console.log("Started Successfully 8021")
})
