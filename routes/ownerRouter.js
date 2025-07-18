const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model")

console.log(typeof ownerModel);
console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === "development"){
    
     router.post("/create", async function(req, res){
     let ownerss = await ownerModel.find();
     if(ownerss.length > 0){
        res.status(503).send("You dont have the permission");
     }
     let { fullname, email, password, gstin } = req.body;
     let createdOwner = await ownerModel.create({
        fullname,
        email,
        password, 
        gstin,
     })
     res.status(201).send("You can create owner");
    })
}


router.get("/", function(req, res){
    res.send("ownerRouter");
})


module.exports = router;