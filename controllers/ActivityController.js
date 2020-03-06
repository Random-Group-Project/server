const { Activity } = require('../models/')
const Axios = require('axios')

class ActivityController {
  static findAll (req, res, next) {
    const UserId = req.currentUserId
    Activity.findAll({
      where: { UserId },
      order: [['id']]
    })
    .then(activities => res.status(200).json(activities))
    .catch(next)
  }

  static create (req, res, next) {
    let activity = {
      UserId: req.currentUserId
    }
    Axios({
      url: 'https://www.boredapi.com/api/activity',
      method: 'GET'
    })
      .then(({data}) => {
        console.log(data, 69696969)
        const GIPHY_KEY = process.env.GIPHY_KEY
        activity.name = data.activity
        let searchStr = data.activity.replace(/\s+/g, '+')
        return Axios({
          url: `http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=${GIPHY_KEY}&limit=1`,
          method: 'GET'
        })
      })
      .then(({data}) => {
        console.log(data, 555555)
        console.log(data.data[0].images.original.url,762348762)
        activity.gif_url = data.data[0].images.original.url
        return Activity.create(activity)
      })
      .then(newActivity => {
        res.status(201).json({ message: 'Generate activity successful', newActivity })
      })
      .catch(next)
  }
}

module.exports = ActivityController