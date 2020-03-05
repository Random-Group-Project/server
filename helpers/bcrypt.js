const bcrypt = require('bcryptjs')
const SALT = bcrypt.genSaltSync(+process.env.SALT)

module.exports = {
  hash (password) {
    return bcrypt.hashSync(password, SALT)
  },

  compare (input, password) {
    return bcrypt.compareSync(input, password)
  }
}