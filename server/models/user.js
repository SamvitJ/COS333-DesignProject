var mongoose = require('mongoose');

var Schema = mongoose.Schema;
module.exports = mongoose.model('User', new Schema ({
    name: String,
    email: String,
    google_token: String,

    school: String,
    headline: String,
    rate: Number,
    availability: [{
    	id: Number,
    	start: String,
    	end: String
    }],
    bio: String,
}));