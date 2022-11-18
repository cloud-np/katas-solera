const express = require("express");
const app = express();
const cors = require('cors')
const Game = require('./game.js');

const game = new Game();

const allowedOrigins = [
    "http://localhost:5173", // React server
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.get("/", function (req, res) {
    res.send("Hello from backend!");
});

app.get("/getWinner/:pick", function (req, res) {
    const data = game.playTurn(req.params.pick)
    res.send(data);
});

app.listen(4000)
console.log("App listen at port 4000");