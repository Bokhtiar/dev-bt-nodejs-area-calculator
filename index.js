const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/views/circle.html")
});

app.get("/traiangle", (req, res) => {
    res.sendFile(__dirname + "/views/traiangle.html")
})



app.listen(PORT, () => {
    console.log(`welcome ${PORT}`)
})

