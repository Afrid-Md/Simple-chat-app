const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("./messages.txt", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const dataToShow = data;
      res.send(
        `<h5>${dataToShow}</h5><br/><form action="/sendmessage" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="text" name="message" placeholder="message"/><input type="hidden" name="username" id="username"/><button type="submit">send</button></form>`
      );
    }
  });
});

router.post("/sendmessage", (req, res, next) => {
  fs.readFile("messages.txt", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      fs.writeFile(
        "messages.txt",
        `${data}  ${req.body.username}:${req.body.message}`,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;