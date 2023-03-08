const userService = require('../services/userService');

const registerUser = async (req, res) => {
    const { username, password, profilePicture } = req.body;

    try {
        const userData = await userService.registerUser(username, password, profilePicture);

        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    registerUser,
};
