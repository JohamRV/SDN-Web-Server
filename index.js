const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', require('./routes/login'));
app.use(express.static(path.join(__dirname, '/static')))
app.listen(port, () => {
    console.log(`Authentication Portal running on ${port}`);
})