const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController');

router.get('/', createController.get_create_render);
router.get('/create', createController.get_create_create);
router.post('/create', createController.get_create_create);
router.get('/congrats', createController.get_create_congrats);
//get request
//router.get('/create', function (req, res, next) {
 //   res.render('birds/create');
//});
//post request
//router.post('/create', function (req, res, next) {
 //res.render('birds/congrats');


 //   console.log("made it");
//    console.log(req.body.Species);
 //   console.log(req.body.Nickname);
//    console.log(req.body.Status);
//});

//router.get('/create', createController.get_create_bird);

//router.post('create', createController.post_create_bird);


/* GET home page. */
//router.get('/', function (req, res, next) {
  //  res.render('birds/birds');
 //   let birdData = {
//        name: 'cool birdie',
 //       type: 'bird',
  //      species: 'hawk'
//    }
//  });
  
//router.get('/', function (req, res, next) {
 
 //   let birdData = {
  //      name: 'cool birdie',
  //      type: 'bird',
  //      species: 'hawk'
  //  }

  //  res.send(birdData);
//});

module.exports = router;
