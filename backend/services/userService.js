const userModel = require('../models/User');

const registerUser = async (username, password, profilePicture) => {
    const usernameLC = username.toLowerCase();
    const passwordLC = password.toLowerCase();
    const profilePictureLC = profilePicture.toLowerCase();

    let userData = {
        username: usernameLC,
        password: passwordLC,
        profilePicture: profilePictureLC,
    };

    console.log(userData);

    userData = await userModel.create(userData);

    return userData;
}

module.exports = {
    registerUser,
};
