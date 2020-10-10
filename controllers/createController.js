
exports.get_create_render = function(req, res) {
    res.render('birds/birds');
}
exports.get_create_create = function(req, res) {
res.render('birds/create');
}
exports.post_create_create = function(req, res) {
    let newCreate = {       
        Species: req.body.Species,       
        Nickname: req.body.Nickname,
        Status: req.body.Status,
        };    
       
        console.log(newCreate);
        res.redirect('birds/congrats');
    }
exports.get_create_congrats = function(req, res) {
    res.render('birds/congrats');
}

//exports.get_create = function(req, res) {
//    res.render('create/create');
//    
//}

//exports.post_create_bird = function (req, res) {    
 //   console.log("made it");
  //  console.log(req.body.Species);
  //  console.log(req.body.Nickname);
  //  console.log(req.body.Status);

//let newCreate = {       
//    Species: req.body.Species,       
 //   Nickname: req.body.Nickname,
 //   Status: req.body.Status,
  //  };    
// };

// we'd save to a database or send to an API here    
   // console.log('this worked')
    //console.log(newCreate);    
    //res.render('create-created');