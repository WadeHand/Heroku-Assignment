
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
        res.redirect('congrats');
    }
    exports.get_create_congrats = function(req, res) {
        res.render('birds/congrats');
   }