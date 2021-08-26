const express = require('express')
const cors = require('cors')
const app = express();
const ctrl = require('./controller')
const axios = require('axios')
const path = require('path')

app.use(express.json());
app.use(cors());
app.use(express.static('client'))

let basketballItems = null;
    
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get(`/api/v1/players/:player`, (req, res) => {
    let playerId = req.params.player
    // axios.get(`https://www.balldontlie.io/api/v1/players/${playerId}`)
    axios.get(`https://www.balldontlie.io/api/v1/players/${playerId}`)
    .then(
        resTwo => res.status(200).send(resTwo.data))
        
    .catch(err => res.sendStatus(err))
})

app.get("/api/donBtn", (req,res) => {
    const spiderMitch = [
      "Donovan Mitchell averaged 26.4 points during the 2020-21 season, helping his team break historic franchise records."
    ];
    
    res.status(200).send(spiderMitch)
});

app.get("/api/bronBtn", (req,res) => {
    const kingJames = [
      "King James averaged 25 point per game during the 2020-21 season."
    ];
    res.status(200).send(kingJames)
});

app.get("/api/stephBtn", (req,res) => {
    const babyFaceAssassin = [
      "The Splash brother himself averaged 32 points 2020-21 season, with a tough fight to try and carry his team in the play-in games."
    ];
    res.status(200).send(babyFaceAssassin)
});
app.get("/api/kdBtn", (req,res) => {
    const easyMoneySniper = [
      "KD @easymoneysniper who is considered the greatest player of the NBA averaged 26.9 points in the 2020-21 season."
    ];
    res.status(200).send(easyMoneySniper)
});
app.get("/api/giannisBtn", (req,res) => {
    const theGreekFreak = [
      "Giannis AKA The Greek Freak AKA the world wide NBA MVP Champion averaged 35.2 points in the 2020-21 NBA championship series."
    ];
    res.status(200).send(theGreekFreak)
});
app.get("/api/dieselBtn", (req,res) => {
    const mayorMcShaq = [
      "Shaq aka The diesel average 29.7 points and 13.6 rebound in the 1999-2000 season."
    ];
    res.status(200).send(mayorMcShaq)
});

const serverPort = process.env.PORT || 4044
app.listen(serverPort, () => console.log("Hurry Up"));