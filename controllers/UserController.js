const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");
const { compare } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static login(req, res, next) {
    // find email
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(response => {
        if (response) {
          // if email is found
          if (compare(req.body.password, response.password)) {
            // check for password, return token if true
            let payload = {
              id: response.id,
              email: req.body.email,
              username: response.username
            };
            res.status(200).json({
              token: generateToken(payload)
            });
          } else {
            // wrong password
            next({
              status: 401,
              msg: "email / password is wrong, please try again"
            });
          }
        } else {
          // if email is not found
          next({
            status: 404,
            msg: "error not found"
          });
        }
      })
      .catch(next);
  }

  static register(req, res, next) {
    User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
      .then(data => res.status(201).json({ data }))
      .catch(err => next(err));
  }

  static gsignin(req, res, next) {
    //baru copy dari dokumentasi, tapi udah nambahin clientId
    const CLIENT_ID = process.env.CLIENT_ID_CLEAN;
    const client = new OAuth2Client(CLIENT_ID);
    const token = req.headers.token;
    // THIS IS WHERE YOU LEFT OFF YESTERDAY
    client
      .verifyIdToken({
        idToken: token,
        audience: CLIENT_ID // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      })
      .then(ticket => {
        const payload = ticket.getPayload();
        // successfully obtained the ticket
        gEmail = payload.email;
        // check whether email already exist or not
        return User.findOne({
          where: {
            email: gEmail
          }
        });
      })
      .then(response => {
        // console.log(response);
        if (response) {
          // email is found, straight to generating keys
          let resPayload = {
            id: response.id,
            email: response.email,
            username: response.username
          };
          res.status(200).json({
            token: generateToken(resPayload)
          });
        } else {
          // email is not found, registering first
          return User.create({
            email: gEmail,
            username: process.env.G_USERNAME,
            password: process.env.G_PASSWORD
          });
        }
      })
      .then(resCreate => {
        console.log(resCreate);
        // email created, generating token
        // res.status(200).generateToken()
      })
      .catch(next);
  }
}

module.exports = UserController;
