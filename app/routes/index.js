'use strict';

var path = process.cwd();
var multer = require("multer");
var upload = multer({ dest: './uploads/'});

module.exports = function(app){
    
    app.route('/')
        .get(function(req,res){
            res.sendFile(path + '/public/index.html');
        });
    
    app.post('/upload',upload.single('file'),function(req,res,next){
        console.log(req);
        if(req.file){
            var file = req.file;
            res.json({ "size": file.size, "name": file.originalname, "type":file.mimetype});
        }else{
            res.json({ "error": "No file uploaded."});
        }
       
    });
};