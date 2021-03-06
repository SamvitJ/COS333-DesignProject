var mongoose = require('mongoose');

var Schema = mongoose.Schema;
module.exports = mongoose.model('User', new Schema ({
    name: String,
    email: String,
    google_token: String,
    image_url: String,
    interviewer: Boolean,

    school: String,
    grad: Number,
    headline: String,
    rate: Number,
    interviews: [String],
    availability: [{
    	id: Number,
    	start: Date,
    	end: Date
    }],
    bio: String,
}));