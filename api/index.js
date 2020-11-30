let express = require('express');
let app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
// var multer  = require('multer');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(multer({ dest: '/tmp/'}));
app.use(express.static('public'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "palindrom"
});

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    let sql = "SELECT * FROM users";
    con.connect(function(err) {
        if (err) res.json({error: err});
        console.log("Connected!");
        con.query(sql, function (err, result) {
            if (err) res.json({error: err});
            console.log(result);
            res.json(result);

        });
    });
})

// This responds a POST request for the homepage
app.post('/users', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/users', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/users', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

let server = app.listen(8081, function () {
    // console.log(server.address())
    let port = server.address().port

    console.log(`Example app listening at http://localhost:${port}`)
})
