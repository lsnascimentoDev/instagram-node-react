// multer- bibliteca que lida com o corpo da requisicao no formato MultiPart e otimatiza o processo de upload de arquivos no  backend
const express = require('express');
const multer = require('multer');
const uploadConfig = require ('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig );


routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

//routes.get('/', (req, res) => {
  //  return res.send('voltei')
//})

module.exports = routes;