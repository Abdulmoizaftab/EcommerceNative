const sql = require("mssql");
const router = require("express").Router();
const bcrypt = require('bcryptjs');
// const validator = require('validator');
const jwt = require('jsonwebtoken');



router.get("/suggest/:prod", (req, res) => {
  req.app.locals.db.query(`select top(5) * from product WHERE name LIKE '%${req.params.prod}%'`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get("/all/:limit", (req, res) => {
  req.app.locals.db.query(`select top(${req.params.limit}) * from product`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/allVenders', (req, res) => {
  req.app.locals.db.query(`select * from vendors`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/allUsers', (req, res) => {
  req.app.locals.db.query(`select * from users`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/venderProduct/:id', (req, res) => {
  req.app.locals.db.query(`select * from product where vendor_id = ${req.params.id}`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/recommend/:word', (req, res) => {
  req.app.locals.db.query(`select top(5)* from product where product.name like '%${req.params.word}%'`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})


router.get('/category', (req, res) => {
  req.app.locals.db.query(`select * from product_category`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/getOrdersAdminPortal', (req, res) => {
  req.app.locals.db.query(`select order_items.* , order_details.user_id , order_details.total, order_details.payment_id , order_details.orderStatus, 
  product.vendor_id,product.name,product.description,product.price, product.imgs,product.discount_id,product.inventory_id,product.inStock, 
  users.username,users.address,users.email,users.telephone
  from order_items
  inner join order_details on order_items.order_id = order_details.order_id
  inner join product on product.product_id = order_items.product_id
  inner join users on users.user_id = order_details.user_id 
  order by order_id`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/productAdminPortal', (req, res) => {
  req.app.locals.db.query(`
  select product.* ,discount.name as Discount_name, discount.description as discount_description, discount.discount_percent,discount.active
  from product
  left join discount on discount.discount_id = product.discount_id
  where product.vendor_id = 2`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.get('/getSpecificOrder', (req, res) => {
  req.app.locals.db.query(`
  select order_items.* , order_details.total, order_details.payment_id , order_details.orderStatus, 
  product.vendor_id,product.name,product.description,product.price, product.imgs,product.discount_id,product.inventory_id,product.inStock, 
  users.username,users.address,users.email,users.telephone
  from order_items
  inner join order_details on order_items.order_id = order_details.order_id
  inner join product on product.product_id = order_items.product_id
  inner join users on users.user_id = order_details.user_id 
  where item_id = 4`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})

router.post("/register", (req, res) => {
  const { username, email, password, first_name, last_name, address, telephone } = req.body
  req.app.locals.db.query(`select * from users where email='${email}'`, async function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
    }
    else {
      if (Object.keys(recordset.recordset).length !== 0) {
        res.status(200).json("Email already in use")
      }
      else {
        const encrypt_pswd = await bcrypt.hash(password, 10);
        req.app.locals.db.query(`insert into users (username , password,first_name,last_name,address,telephone,email) values('${username}' , '${encrypt_pswd}' , '${first_name}','${last_name}','${address}','${telephone}','${email}')`, function (err, recordset) {
          if (err) {
            console.error(err)
            res.status(500).send('SERVER ERROR')
            return
          }
          else {
            req.app.locals.db.query(`select user_id, username from users where email = '${email}'`, function (err, recordset) {
              if (err) {
                console.error(err)
                res.status(500).send('SERVER ERROR')
                return
              }

              const token = jwt.sign({ user_id: recordset.recordset[0].user_id, user_name: recordset.recordset[0].username }, process.env.SECRET_KEY)
              res.status(201).json({ user: recordset.recordset, token: token });
            })

          }
        })
      }
    }
  })

}
)


router.post("/login", (req, res) => {
  const { email, password } = req.body;
  req.app.locals.db.query(`select * from users where email='${email}'`, async function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
    }
    else {
      if (Object.keys(recordset.recordset).length !== 0) {
        const matchedPassword = await bcrypt.compare(password, recordset.recordset[0].password)
        if (matchedPassword) {
          const token = jwt.sign({ user_id: recordset.recordset[0].user_id, user_name: recordset.recordset[0].username }, process.env.SECRET_KEY)
          res.status(201).json({ user: recordset.recordset, token: token });
        }
        else {
          res.status(400).json('Wrong credential');
        }
      }
      else {
        res.status(400).json("No user found");
      }
    }
  })
})



router.put('/UpdateOrder', (req, res) => {
  const { orderStatus, order_id } = req.body;
  req.app.locals.db.query(`update order_details set orderStatus = '${orderStatus}' where order_id = ${order_id}`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).send('Order Updated');
  })
})










module.exports = router
