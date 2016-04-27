var mongoose = require('mongoose');

var Schema = mongoose.Schema;
module.exports = mongoose.model('Interview', new Schema ({
    complete: Boolean,
    start: Date,
    end: Date,
    interviewer: String,
    interviewee: String,
    intervieweeFeedback: {
        feedback: String,
        code: String
    },
    interviewerReview: {
        review: String,
        rating: Number
    },
}));