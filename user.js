const moongose = require('mongoose')

const userSchema =new moongose.Schema({
    name: { type:String},
    gold: { type:Number},
    blue: { type:Number},
    green: { type:Number},
    orange: { type:Number},

})

module.exports = moongose.model('color-brand', userSchema)