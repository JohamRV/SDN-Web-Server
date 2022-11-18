const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const axios = require("axios");
const { response } = require("express");
const IP = require("ip");

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/static')))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
    res.render("login", {
    } );
})

app.post("/login", (req, res) => {
    let isAuth;
    let body = { username: req.body.username, password: req.body.password }
    console.log(req.body.username);
    console.log(req.body.password);
    
    doPostRequest("http://localhost:8080/is-authenticated", body)
        .then(data => 
            {   
                let path = "";
                console.log(data);
                console.log(IP.address())
                if(data.isAuthenticated == true){
                    path = "permission";  
                }else{
                    path = "login";
                }

                res.render(path, {   
                } );  
               
            })
        .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`Authentication Portal running on ${port}`);
})

async function doPostRequest(url, payload) {
    let res = await axios.post(url, payload);
    let data = res.data;
    return data;
}