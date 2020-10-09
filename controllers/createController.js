exports.get_create_create = function(req, res) {
    res.render('create/create');
}

exports.create_post = function (req, res) {    
let newCreate = {       
    content: req.body.content,       
    completd: false    
    };    
 };

// we'd save to a database or send to an API here    
    consol.log('this worked')
    console.log(newCreate);    
    res.render('create-created');