const axios = require("axios").default;

module.exports = {
    sendEmail(data){
        let token = process.env.RESTDB_KEY;
        axios.post("https://randomorganizer-b2e9.restdb.io/mail",{
            "to":`${data.email}`,
            "subject":"You successfully created a new Account", 
            "html": "<p>Thank you for wanting to relieve your boring life through our website</p>", 
            "company": "Random Inc", 
            "sendername": "Random Organizer support"
        })
        axios({
            method : "post",
            url: "https://randomorganizer-b2e9.restdb.io/mail"
        })
    }
}