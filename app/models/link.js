// app/models/link.js
// grab the mongoose module
var mongoose = require('mongoose');
var shortid = require('shortid');

// define our link model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Link', {
    _id: {
        type: String,
        'default': shortid.generate
    },
    url : {type : String},
    created_at : { type: Date, default: Date.now }
});
