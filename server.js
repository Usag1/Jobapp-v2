const express = Require('express')
const port = 3000
const app = express()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/', function(req, res) {
    res.send('hello');
})

app.listen($ { port }, () => console.log('app is running on port'
    $ { port }));