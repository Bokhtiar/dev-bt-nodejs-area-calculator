require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000 ;

const mymiddleware = (req, res, next) =>{
    console.log('middleware function')
    next()
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//static middlewre 
app.use(express.static('public'));
// global middleware all route 
app.use(mymiddleware);

app.get("/", mymiddleware, (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/views/circle.html")
});

app.get("/traiangle", (req, res) => {
    res.sendFile(__dirname + "/views/traiangle.html")
})

app.post("/traiangle/store", (req, res) => {
    const base  = res.body.base;
    const height = res.body.height;
    const area = 0.5 * base * height;
    res.send(`area of traiangle is : ${area}`); 
})

app.post("/circle/store", (req, res) => {
    const radius = res.body.base;
    const area = Math.PI * radius * radius;
    res.send(`circle is ${area}`)
})


app.use((req, res , next) => {
    res.send("404 not found")
})

// another error handleing
app.use((err, req, res, next) => {
    res.status(500).send("something  broke!!!")
})


app.listen(PORT, () => {
    console.log(`welcome ${PORT}`)
})

