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
  users.username,users.email,users.phone
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

router.get('/getProductAdminPortal', (req, res) => {
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



router.post("/register", (req, res) => {
  const { username, email, password, first_name, last_name, address, phone } = req.body
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
        req.app.locals.db.query(`insert into users (username , password,first_name,last_name,address,phone,email) values('${username}' , '${encrypt_pswd}' , '${first_name}','${last_name}','${address}','${phone}','${email}')`, function (err, recordset) {
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
  const { orderStatus, item_id } = req.body;
  req.app.locals.db.query(`update order_items set orderStatus = '${orderStatus}' where item_id = ${item_id}
  `, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).send('Order Updated');
  })
})


router.post('/addProduct', (req, res) => {
  const { name, description, price, imgs, discount_id, category_id, inStock } = req.body;
  req.app.locals.db.query(`insert into product(name , description, price, imgs, discount_id, category_id, inStock) values('${name}','${description}',${price},'${imgs}',${discount_id},${category_id},${inStock})`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).send('Product Added')
  })
})


router.get('/getSpecificProductAdminPortal/:id', (req, res) => {
  req.app.locals.db.query(`select product.* ,discount.name as Discount_name, discount.description as discount_description, discount.discount_percent,discount.active
  from product
  left join discount on discount.discount_id = product.discount_id
  where product.vendor_id = 2 and product_id = ${req.params.id}`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})


router.get('/getSpecificOrder/:id', (req, res) => {
  req.app.locals.db.query(`
  select order_items.* , order_details.total, order_details.payment_id , order_details.orderStatus as MainOrderStatus, 
  product.vendor_id,product.name,product.description,product.price, product.imgs,product.discount_id,product.inventory_id,product.inStock, 
  users.username,users.email,users.phone
  from order_items
  inner join order_details on order_items.order_id = order_details.order_id
  inner join product on product.product_id = order_items.product_id
  inner join users on users.user_id = order_details.user_id 
  where item_id = ${req.params.id}`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})


router.put('/UpdateProduct', (req, res) => {
  const { name, description, imgs, price, product_id } = req.body;
  console.log("🚀 ~ file: sqlRoutes.js ~ line 253 ~ router.put ~ req.body", req.body)
  req.app.locals.db.query(`UPDATE product
  SET name='${name}', description='${description}', imgs='https://www.charlesclinkard.co.uk/images/products/1613410518-31690700.jpg',
  price=${price}
  WHERE product_id=7`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR update')
      return
    }
    res.status(200).send('Order Updated');
  })
})

router.get('/staff', (req, res) => {
  req.app.locals.db.query(`select * from staff where vendorsId = 5`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})


router.get('/users', (req, res) => {
  req.app.locals.db.query(`   select  order_details.user_id,product.vendor_id,sum(order_details.total) as total_of_vendor,users.username,users.email,users.password,users.first_name,users.last_name,users.isVerified,users.phone
  from order_items
  inner join order_details on order_items.order_id = order_details.order_id
  inner join product on product.product_id = order_items.product_id
  inner join users on users.user_id = order_details.user_id 
  where product.vendor_id = 2
  group by order_details.user_id,product.vendor_id,users.username,users.password,users.email,users.first_name,users.last_name,users.isVerified,users.phone`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})


router.get('/files', (req, res) => {
  req.app.locals.db.query(`select * from Archive.dbo.Records`, function (err, recordset) {
    if (err) {
      console.error(err)
      res.status(500).send('SERVER ERROR')
      return
    }
    res.status(200).json(recordset.recordset)
  })
})






module.exports = router
