const router = require('express').Router()
const { checkAccountPayload, checkAccountId } = require('./accounts-middleware')
const accounts = require('./accounts-model')

router.get('/api/accounts', checkAccountPayload(),async(req, res, next) => {
  // DO YOUR MAGIC
  accounts.getAll()
  .then((accounts)=>{
    res.status(200).json([accounts])
  })
  .catch((err)=>
  next(err)
  )
})

router.get('/:id', checkAccountId(),(req, res, next) => {
  // DO YOUR MAGIC
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
