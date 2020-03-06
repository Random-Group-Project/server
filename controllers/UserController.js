const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");
const { compare } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { sendEmail } = require("../helpers/sendEmail");

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
              email: req.body.email
            };
            let token = generateToken(payload);
            res.status(200).json({
              username: response.username,
              token
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
      .then(data => {
        // send email
        sendEmail(data);
        res.status(201).json({ data });
      })
      .catch(err => next(err));
  }

  static gsignin(req, res, next) {
    let obj = {
      password: process.env.G_PASSWORD
    };
    //baru copy dari dokumentasi, tapi udah nambahin clientId
    const CLIENT_ID = process.env.CLIENT_ID;
    const client = new OAuth2Client(CLIENT_ID);
    const token = req.headers.token;
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
        let gEmail = payload.email;
        // catch user data
        obj.email = gEmail;
        obj.username = payload.name;
        // check whether email already exist or not
        return User.findOne({
          where: {
            email: gEmail
          }
        });
      })
      .then(resGmail => {
        if (resGmail) {
          // email is found, proceeding to log in
          return resGmail;
        } else {
          // email is not found, create a new account
          sendEmail(obj);
          return User.create(obj);
        }
      })
      .then(resCreate => {
        // generate token
        let payload = {
          id: resCreate.id,
          email: resCreate.email
        };
        let token = generateToken(payload);
        res.status(200).json({
          username: resCreate.username,
          token
        });
      })
      .catch(next);
  }
}

module.exports = UserController;
