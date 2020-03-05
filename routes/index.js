const router = require('express').Router()

const users = require('./users')
const activities = require('./activities')

router.use('/users', users)
router.use('/activities', activities)

module.exports = router