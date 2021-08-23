const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());


// app.get("/api/users",(req, res) => {
//     let friends = ["Harry", "Son", "Messi", "Debala","Dani"];
//     res.status(200).send(friends);
// })


app.listen(4044, () => console.log("Hurry Up"));