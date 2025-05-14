const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    role: String,
    bio: String,
    image: String
});

const Team = mongoose.model('Team', teamSchema);

module.exports = mongoose.model('Team', teamSchema);