const User = require('../models')
const { OAuth2Client } = require('google-auth-library');

class UserController {
  static login (req, res, next) {

  }

  static register (req, res, next) {

  }

  static gsiging (req, res, next) {
    //baru copy dari dokumentasi, tapi udah nambahin clientId
    const CLIENT_ID = process.env.CLIENT_ID
    const client = new OAuth2Client(CLIENT_ID)
    client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    })
      .then(ticket => {
        const payload = ticket.getPayload();

      })
      .catch(next)
  }
}

module.exports = UserController