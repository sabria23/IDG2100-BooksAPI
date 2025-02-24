const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', function (req, res) {
    console.log(req.body)
    res.end();
})

app.get('/books', function (req, res) {
    console.log(req.body)
    res.end();
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 