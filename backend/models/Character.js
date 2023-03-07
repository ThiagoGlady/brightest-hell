const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: Number,
    race: {
        type: String,
        required: true,
    },
    classType: {
        type: String,
        required: true,
    },
    pv: {
        type: Number,
        required: true,
    },
    pm: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const CharacterModel = mongoose.model('Character', characterSchema);

module.exports = CharacterModel;