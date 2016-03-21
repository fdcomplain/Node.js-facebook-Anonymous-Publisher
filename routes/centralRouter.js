var express = require('express');
var router = express.Router();
var FB = require('fb');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '{{Title}}' }); //change your title
});

router.post('/postresult', function(req, res, next) {
    var message = req.body.comment;
    FB.setAccessToken('Please Insert Your Acccess Token'); // Please Insert Your Acccess Token
    FB.api('{{Please Insert Your Facebook Page Id}}/feed', 'post', { //Please Insert Your Facebook Page Id
        message: message
    }, function(res) {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log('Post Id: ' + res.id);
    });
    res.render('postresult', { title: '結果' });

});


module.exports = router;
