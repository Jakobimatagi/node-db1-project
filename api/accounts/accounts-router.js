const router = require('express').Router()
const { checkAccountPayload, checkAccountId } = require('./accounts-middleware')
const accounts = require('./accounts-model')

router.get('/api/accounts',async(req, res, next) => {
  // DO YOUR MAGIC
  accounts.getAll()
  .then((accounts)=>{
    res.status(200).json([accounts])
  })
  .catch((err)=>
  next(err)
  )
})

router.get('/api/accounts/:id',(req, res, next) => {
  // DO YOUR MAGIC
  accounts.getById(req.params.id)
  .then((acct)=>{
    if(acct){
      req.acct = acct

      res.status(200).json(acct)
      next()
    }else{
      res.status(404).json({
        message: "Account not found"
      })
    }
  })
  .catch(
    (err)=>{
      next(err)
    }
  )
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
