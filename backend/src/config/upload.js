// configurar forma de upload na aplicação

const multer = require('multer');
const path = require('path');  // biblioteca nativa do note para lidar com caminhos

module.exports = {
         storage: new multer.diskStorage({
        destination: path.resolve(__dirname,'..', '..', 'uploads'),
        filename: function(req, file , cb){
            cb(null, file.originalname);
        }
    })

};
