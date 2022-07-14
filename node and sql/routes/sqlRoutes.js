const sql = require("mssql")
const router = require("express").Router()



router.get("/suggest/:prod", (req,res) =>{
    req.app.locals.db.query(`select top(15) * from product WHERE name LIKE '%${req.params.prod}%'`, function(err, recordset) {
        if (err) {
          console.error(err)
          res.status(500).send('SERVER ERROR')
          return
        }
        res.status(200).json(recordset.recordset)
      })
})

router.get("/all", (req,res) =>{
  req.app.locals.db.query(`select top(60) * from product`, function(err, recordset) {
      if (err) {
        console.error(err)
        res.status(500).send('SERVER ERROR')
        return
      }
      res.status(200).json(recordset.recordset)
    })
})

router.post("/register", (req,res) =>{
  // const {username,email,password,f_name,l_name,address,telephone} = req.body
    const {email} = req.body
    try {
      const existing_user=req.app.locals.db.query(`select * from users where email='${email}'`);
     if(existing_user){
      res.send("User already exist")
     }
      
    } catch (error) {
     res.send(error) 
    }
  // try {
  //   const existing_user=req.app.locals.db.query(`select ${email} from product`);
  //   if(existing_user){
  //     res.se
  //   }
  //   // req.app.locals.db.query(`select top(60) * from product`, function(err, recordset) {
  //   //   if (err) {
  //   //     console.error(err)
  //   //     res.status(500).send('SERVER ERROR')
  //   //     return
  //   //   }
  //   //   res.status(200).json(recordset.recordset)
  //   //})
  // } catch (error) {
  //   console.log(error);
  // }
 // res.send("chali hai bhai");

})





module.exports = router
