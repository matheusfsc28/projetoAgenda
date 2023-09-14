const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const HomeSchema = new mogoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;