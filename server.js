import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

//app config
const app = express();
const port = process.env.PORT || 9000;
//middlewarres

app.use(express.json());

//DB config
const connection_url =
  "mongodb+srv://admin:oItQT38G6kQlwvrH@cluster0.ku5stxs.mongodb.net/onchatdb?retryWrites=true&w=majority";
mongoose.connect(connection_url);

//pusher

//api routes

app.get("/", (req, res) => {
  res.status(200).send("hellow world");
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen

app.listen(port, () => console.log(`listening on port :${port}`));
