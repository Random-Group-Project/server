const Activity = require('../models/')
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
      .then(response => {
        console.log(response)
        const GIPHY_KEY = process.env.GIPHY_KEY
        activity.name = response.activity
        let searchStr = response.activity.replace(/\s+/g, '+')
        return Axios({
          url: `http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=${GIPHY_KEY}&limit=1`,
          method: 'GET'
        })
      })
      .then(giphy => {
        console.log(giphy.data[0].images.original.url)
        activity.git_url = giphy.data[0].images.original.url
        return Activity.create(activity)
      })
      .then(() => {
        res.status(201).json({ message: 'Generate activity successful' })
      })
      .catch(next)
  }
}

module.exports = ActivityController