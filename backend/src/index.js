const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); // biblioteca que permite que o backens seja acessivel pelo frontend mesmo estando em dominios diferentes



const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://mongo:mongo@cluster0-8aqg2.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

app.use((req, res, next)=>{
    req.io = io;

    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads','resized')));

app.use(require('./routes'));    
server.listen(3330);
