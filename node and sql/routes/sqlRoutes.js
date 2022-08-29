const sql = require("mssql");
const router = require("express").Router();
const bcrypt = require('bcryptjs');
// const validator = require('validator');
const jwt=require('jsonwebtoken');



router.get("/suggest/:prod/:limit", (req,res) =>{
    req.app.locals.db.query(`select top(${req.params.limit}) * from product WHERE name LIKE '%${req.params.prod}%'`, function(err, recordset) {
        if (err) {
          console.error(err)
          res.status(500).send('SERVER ERROR')
          return
        }
        res.status(200).json(recordset.recordset)
      })
})

router.get("/all/:limit", (req,res) =>{
  req.app.locals.db.query(`select top(${req.params.limit}) * from product`, function(err, recordset) {
      if (err) {
        console.error(err)
        res.status(500).send('SERVER ERROR')
        return
      }
      res.status(200).json(recordset.recordset)
    })
})

router.post("/register",  (req,res) =>{
  const {username,email,password,first_name,last_name} = req.body
  req.app.locals.db.query(`select * from users where email='${email}'`, async function(err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
    }
    else{
      if(Object.keys(recordset.recordset).length !== 0){
        res.status(200).json("Email already in use")
      }
      else{
        const encrypt_pswd = await bcrypt.hash(password,10);
        req.app.locals.db.query(`insert into users (username , password,first_name,last_name,email) values('${username}' , '${encrypt_pswd}' , '${first_name}','${last_name}','${email}')`, function(err, recordset) {
          if (err) {
            console.error(err)
            res.status(500).send('SERVER ERROR')
            return
          }
          else{
            req.app.locals.db.query(`select user_id, username from users where email = '${email}'`, function(err, recordset) {
              if (err) {
                console.error(err)
                res.status(500).send('SERVER ERROR')
                return
              }
              
              const token=jwt.sign({user_id:recordset.recordset[0].user_id,user_name:recordset.recordset[0].username},process.env.SECRET_KEY)
              res.status(201).json({user:recordset.recordset,token:token});
            })

          }
        })
      }
    }
  })
  
} 
)


router.post("/login",  (req,res) =>{
  const {email,password} = req.body;
  req.app.locals.db.query(`select * from users where email='${email}'`, async function(err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
    }
    else{
      if(Object.keys(recordset.recordset).length !== 0){
        const matchedPassword=await bcrypt.compare(password,recordset.recordset[0].password)
        if(matchedPassword){
          const token=jwt.sign({user_id:recordset.recordset[0].user_id,user_name:recordset.recordset[0].username},process.env.SECRET_KEY)
          res.status(201).json({user:recordset.recordset,token:token});
        }
        else{
          res.status(400).json('Wrong credential');
        }
      }
      else{
        res.status(400).json("No user found");
      }
    }
  })
})
  
router.get("/popular/:limit", (req,res) =>{
  req.app.locals.db.query(`SELECT top(10) SUM(order_items.quantity) as total_Orders, order_items.product_id,product.name,product.price,product.imgs,product.discount_id,product.inventory_id,product.category_id,product.vendor_id,product.rating,product.isDeleted,product.inStock
  FROM order_items
  INNER JOIN product ON order_items.product_id = product.product_id
  GROUP BY order_items.product_id, product.name,product.price,product.imgs,product.discount_id,product.inventory_id,product.category_id,product.vendor_id,product.rating,product.isDeleted,product.inStock
  ORDER BY total_Orders desc`, function(err, recordset) {
      if (err) {
        console.error(err)
        res.status(500).send('SERVER ERROR')
        return
      }
      res.status(200).json(recordset.recordset)
    })
})









module.exports = router
