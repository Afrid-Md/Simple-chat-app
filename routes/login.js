const express = require('express');
const router = express.Router();

router.get("/login", (req, res, next) => {
    res.send(
      `<form action="/userlogin" method="POST" onsubmit="localStorage.setItem('username',document.getElementById('username').value)"><label>Enter your name</label><br/><input type="text" name="name" id="username"/><br/><button type="submit">login</button></form>`
    );
  });
  
  router.post("/userlogin", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });

  module.exports = router;