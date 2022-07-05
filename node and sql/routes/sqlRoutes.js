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

// module.exports = function(req, res) {
//     req.locals.db.query('select top(1000) * from product', function(err, recordset) {
//       if (err) {
//         console.error(err)
//         res.status(500).send('SERVER ERROR')
//         return
//       }
//       res.status(200).json({ message: 'success' })
//     })
//   }





module.exports = router
