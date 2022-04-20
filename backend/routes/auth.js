const router = require("express").Router();

router.get("/register", (req,res)=>{
    res.send("hello")
})

router.post("/login", (req,res)=>{
    const name = req.body.username;
    console.log(name)
})

module.exports = router