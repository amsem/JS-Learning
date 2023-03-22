const mongoose = require('mongoose')

const Schema = mongoose.Model

const workoutSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    reps:{
        type:Number,
        required: true
    },
    load:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Workout', workoutSchema)

