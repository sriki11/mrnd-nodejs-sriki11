var express = require('C:/Users/ADG/AppData/Roaming/npm/node_modules/express');
var router = express.Router();
var file = require('fs');
var id = -1;
var data = new Object();
/* GET contacts */
/*router.get('/:id', function(req, res, next) {
    var ID = parseInt(req.params.id);
    res.json(data[ID]);
    res.send();
});*/

router.post('/', function (req, res, next) {
    id += 1;
    var str = JSON.stringify(req.body);
    var fd = 0;
    console.log('req post');

    file.writeFile('../../spec/tests/data/' + id +'-Contact.json',str , function (err) {
        if (err)
            console.log(err);
    });
    res.json(id);

});

router.put('/:id', function(req, res, next) {
    file.readFile('../../spec/tests/data/' + parseInt(req.params.id) + '-Contact.json', function (err, data) {
        if (err)
            console.log(err);

        console.log(data);
        var jsoned_d = JSON.parse(JSON.stringify(data));
        jsoned_d.firstName = req.body.firstName;
        file.writeFile('../../spec/tests/data/' + parseInt(req.params.id) + '-Contact.json', JSON.stringify(jsoned_d), function (err) {
            if (err)
                console.log(err);
        });
    });
    res.send();


});

router.post('/:id/:message', function (req, res, next) {
    var message = req.params.message;
    file.readFile('../../spec/tests/data/' + parseInt(req.params.id) + '-Contact.json', function (err, data) {
        if (err)
            console.log(err);
        console.log(data);
        var jsoned_d = JSON.parse(JSON.stringify(data));
        if (jsoned_d.Message == undefined)
            jsoned_d.Message = new Array();
        console.log(message);
        jsoned_d.Message.push(message);
        console.log(jsoned_d.Message);
        res.json(jsoned_d.Message);
        file.writeFile('../../spec/tests/data/' + parseInt(req.params.id) + '-Contact.json', JSON.stringify(jsoned_d), function (err) {
            if (err)
                console.log(err);
        });
    });
});

router.get('/:id/ask/:num1', function (req, res, next) {
    var ID = parseInt(req.params.id);
    var num = parseInt(req.params.num1);
    file.readFile('../../spec/tests/data/' + parseInt(req.params.id) + '-Contact.json', function (err, data) {
        if (err)
            console.log(err);
        console.log(data);
        var jsoned_d = JSON.parse(JSON.stringify(data));
        if (jsoned_d.Message == undefined)
            res.send(500);
        jsoned_d.Message.push(message);
        res.json(jsoned_d.Message[num]);
    });
})

module.exports = router;
