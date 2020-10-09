const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  
    let birdData = {
        name: 'cool birdie',
        type: 'bird',
        species: 'hawk'
    }

    res.send(birdData);
});

router.get('/create', function (req, res, next) {
    res.render('birds/create');
});

module.exports = router;
