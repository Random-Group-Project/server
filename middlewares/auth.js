const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = {
  authentication (req, res, next) {
    const token = req.headers.token
    try {
      const decoded = verifyToken(token)
      const id = decoded.id
      User.findOne({where: {id}})   //findByPk(id)
        .then(user => {
          if (!user) throw {
            status: 401,
            message: 'Please log in first'
          }
          else {
            req.currentUserId = user.id
            next()
          }
        })
    } catch (error) {
        next(error)
    }
  }
}