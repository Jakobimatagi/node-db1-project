function checkAccountPayload() {
  // DO YOUR MAGIC
  return (req, res, next) => {
     if(!req.body){
       res.status(400)
     }
     else if (!req.body.name || !req.body.budget){
       res.status(400).json({ message: "name and budget are required" })
     } else if(req.body.name != String){
       res.status(400).json({ message: "name of account must be a string" })
     } else if(req.body.budget != Number){
       res.status(400).json({ message: "budget of account must be a number" })
     } else if(req.body.budget < 0 || req.body.budget > 1000000){
       res.status(400).json({ message: "budget of account is too large or too small" })
     }
   }
}

function checkAccountNameUnique() {
  // DO YOUR MAGIC

   
}

function checkAccountId() {
  // DO YOUR MAGIC
  return (req, res, next) =>{
    if(req.params.id != req.body.id){
      res.status(404).json({ message: "account not found" })
    } else{
      res.status(200)
    }
  }
}

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
}
