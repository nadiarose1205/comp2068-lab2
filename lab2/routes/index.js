'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/', function (method, x, y) {

    var method = req.query.method;
    var x = req.query.x;
    var y = req.query.y;
    var sum = x + y;
    var difference = x - y;
    var product = x * y;
    var quotient = x / y;

    if (method = "add") {
        console.log(sum)
    }
    else if (method = "subtract") {
        console.log(difference)
    }
    else if (method = "multiply") {
        console.log(product)
    }
    else if (method = "divide") {
        console.log(quotient)
    }
    else {
        console.log("Sorry, that is not a valid method!")
    };
    
});

module.exports = router;
