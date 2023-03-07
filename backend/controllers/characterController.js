const CharacterModel = require('../models/Character');

const create = async (req, res) => {
    try {
        const character = {
            name: req.body.name,
            age: req.body.age,
            weight: req.body.wight,
            race: req.body.race,
            classType: req.body.classType,
            pv: req.body.pv,
            pm: req.body.pm,
            image: req.body.image,
        };

        const response = await CharacterModel.create(character);
    
        res.status(200).json({response, message: 'character created'});
    } catch (error) {
        console.log(error);
    }

}

const getCharacters = async (req, res) => {
    try {
        const response = await CharacterModel.find({});
        
        res.status(200).json({response});

    } catch (error) {
        console.log(error);
    }
}


const characterController = {
    create,
    getCharacters,
};

module.exports = characterController;