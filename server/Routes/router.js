const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");


// register user data
router.post("/create", (req, res) => {

    const { restaurant_name, contact_name, location, pincode, phone_number, website, average_daily_transactions } = req.body;

    if (!restaurant_name || !contact_name  || !location || !pincode || !phone_number || !website || !average_daily_transactions) {
        res.status(422).json("plz fill the all data");
    }

    try {
        
         conn.query("INSERT INTO details SET ?", { restaurant_name, contact_name, location, pincode, phone_number, website, average_daily_transactions }, (err, result) => {
            if (err) {
                console.log("err" + err);
            } else {
                res.status(201).json(req.body);
            }
        })
            
    }
     catch (error) {
        res.status(422).json(error);
    }

});




// get userdata

router.get("/getusers",(req,res)=>{

    conn.query("SELECT * FROM details",(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});




module.exports = router;



