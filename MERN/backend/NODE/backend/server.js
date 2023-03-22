require('dotenv').config()
const express = require('express')

const workoutsRoutes = require('./routes/workouts')

const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
//routes
app.use('/api/workouts', workoutsRoutes)

// connect to DB
mongoose.connect(process.env.MONG_URI)
  .then(() => {
  // listen for request
  app.listen(process.env.PORT, ()=> {
  console.log('connected to DEB & listenning to port',process.env.PORT)
})
  })
  .catch((error) => {
    console.log(error)
  })
