import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));


// routes
app.get('/', (req, res) => {
  res.render('index.ejs', { data: "from server"});
});



app.listen(port, () => console.log(`Sever listening at port ${port}`));