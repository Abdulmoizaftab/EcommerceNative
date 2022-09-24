const sql = require("mssql");
const router = require("express").Router();
const bcrypt = require('bcryptjs');
// const validator = require('validator');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');



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

// REGISTRATION PROCESS
const sendMail=(email,name,user_id)=>{
  try {
    const transporter=nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:587,
      secure:false,
      requireTLS:true,
      auth:{
        user:'digevoldevs@gmail.com',
        pass:'vrrrakdeevotsepa'
      }
    })
    const mailOptions={
      from:'digevoldevs@gmail.com',
      to:email,
      subject:'For verify your email',
      html:"<p>Hey "+name+" Please verify you mail.</p> <a href='http://192.168.1.24:5000/sql/verify?id="+user_id+"'>Click here verify your mail</a>"
    
    }
    transporter.sendMail(mailOptions,function(error,info){
      if(error){
        console.log(error);
      }
      else{
        console.log("Email has been sent==> ",info.response);
      }
    })
  } catch (error) {
    console.log(error);
  }
}
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
        const verify=0
        const encrypt_pswd = await bcrypt.hash(password,10);
        req.app.locals.db.query(`insert into users (username , password,first_name,last_name,email,isVerified) values('${username}' , '${encrypt_pswd}' , '${first_name}','${last_name}','${email}',${verify})`, function(err, recordset) {
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
              const user_id=recordset.recordset[0].user_id;
              sendMail(email,first_name,user_id)
            })

          }
        })
      }
    }
  })
} 
)
router.get("/verify",(req,res)=>{

    req.app.locals.db.query(`update users set isVerified=1 where user_id=${req.query.id}`, function(err, recordset) {
      if (err) {
        console.error(err)
        res.status(500).send('SERVER ERROR')
        return
      }
      else{
        res.render('index');
      }
    })
  

})
//REGISTRATION PROCESS END




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
        if(matchedPassword && recordset.recordset[0].isVerified === true){
          const token=jwt.sign({user_id:recordset.recordset[0].user_id,user_name:recordset.recordset[0].username},process.env.SECRET_KEY)
          res.status(201).json({user:recordset.recordset,token:token});
        }
        else{
          res.status(400).json('Wrong credential');
        }
      }
      else{
        res.status(400).json("Wrong credential");
      }
    }
  })
})

router.get('/allVenders',(req,res)=>{
  req.app.locals.db.query(`select * from vendors`, function(err, recordset){
    if(err){
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/venderProduct/:id',(req,res)=>{
  req.app.locals.db.query(`select * from product where vendor_id = ${req.params.id}`, function(err, recordset){
    if(err){
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})
  
router.get("/popular/:limit", (req,res) =>{
  req.app.locals.db.query(`SELECT top(${req.params.limit}) SUM(order_items.quantity) as total_Orders, order_items.product_id,product.name,product.price,product.imgs,product.discount_id,product.inventory_id,product.category_id,product.vendor_id,product.rating,product.isDeleted,product.inStock
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

router.get('/allCategories',(req,res)=>{
  req.app.locals.db.query(`select * from product_category`, function(err, recordset){
    if(err){
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/getSubCategories/:parentId',(req,res)=>{
  req.app.locals.db.query(`select * from Category_hierarchy where HierParent = ${req.params.parentId}`, function(err, recordset){
    if(err){
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/allCategoryProducts/:limit/:parentCateg',(req,res)=>{ //products of a certain cateory
  req.app.locals.db.query(`select top(${req.params.limit}) * from product where category_id = ${req.params.parentCateg}`, function(err, recordset){
    if(err){
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/subCategoryProducts/:limit/:hierId',(req,res)=>{ //products of a certain cateory
  req.app.locals.db.query(`select top(${req.params.limit}) * from product where HierId like '${req.params.hierId}%'`, function(err, recordset){
    if(err){
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})








module.exports = router
