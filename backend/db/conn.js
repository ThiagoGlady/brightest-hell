const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb+srv://thiagoglady:atlasglady10@cluster0.p7g0i4o.mongodb.net/?retryWrites=true&w=majority');
        console.log('Conectado ao banco de dados');
    } catch (error) {
        console.log(error);
    }
}

module.exports = main;