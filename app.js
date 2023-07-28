const express = require ('express');
const app = express();
const PORT = 3030;
const path = require('path');
app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,'views','register.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'views','login.html')));



app.listen(PORT,() => console.log('server running in http://localhost:' + PORT));