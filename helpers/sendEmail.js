const axios = require("axios").default;

module.exports = {
  // this is still not connected to register
  sendEmail(data) {
    let token = process.env.RESTDB_KEY;
    return axios({
      method: "post",
      url: "https://randomorganizer-b2e9.restdb.io/mail",
      data: {
        to: `${data.email}`,
        subject: `Hello ${data.username} You successfully created a new Account!`,
        html: `<p>Welcome ${data.username}! Thank you for wanting to relieve your boring life through our website. Let the random things you decided to do lead to your eternal happiness</p>`,
        company: "Random Inc",
        sendername: "Random Organizer support"
      },
      headers: {
        "x-apikey": token
      }
    });
  }
};
