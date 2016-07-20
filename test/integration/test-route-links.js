var supertest = require('supertest'),
assert = require('assert'),
app = require('../../server');

exports.create_links = function(done){
   supertest(app)
   .post('/api/links')
   .set('Content-Type', 'application/x-www-form-urlencoded')
   .send({'url': 'http://google.com'})
   .expect(200)
   .end(function(err, res) {
        assert.ok(!err);
        assert.equal(res.body['url'], 'http://google.com')
        if (err) return done(err);
            done();
    });
};

exports.create_links_no_url_given = function(done){
   supertest(app)
   .post('/api/links')
   .set('Content-Type', 'application/x-www-form-urlencoded')
   .expect(400, done)
};
