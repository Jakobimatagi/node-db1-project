
const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')

}

const getById = id => {
  // DO YOUR MAGIC
  return db('*')
  .from("accounts")
  .where("id", id)
  .limit(1)

}

 const  create = account => {
  // DO YOUR MAGIC
  return  db('accounts').insert(account)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return db('accounts')
  .where({ id })
  .update(account)
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts')
  .where({id})
  .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
