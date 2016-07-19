// app/routes.js

// grab the link model we just created
var Link = require('./models/link');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/api/links', function(req, res) {
        // use mongoose to get all links in the database
        Link.find(function(err, links) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(links); // return all links in JSON format
        });
    });

    app.post('/api/links', function(req, res) {
        var link = new Link();
        console.log('Creating a new short link for url: ' + req.body.url)
        link.url = req.body.url;

        link.save(function(err) {
            if (err)
                res.send(err);

            res.json(link);
        })
    });

    app.get('/api/links/:link_id', function(req, res) {
        // use mongoose to get all links in the database
        console.log('Retrieving short link with id: ' + req.params.link_id)
        Link.findById(req.params.link_id, function(err, link) {

            if (err)
                res.send(err);

            res.json(link);
        });
    });

    app.get('/api/go/:link_id', function(req, res) {
        Link.findById(req.params.link_id, function(err, link) {

            if (err)
                res.send(err);
            console.log('Redirecting the user to: ' + link.url)
            res.redirect(link.url);
        });
    })

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
