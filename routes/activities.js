const router = require('express').Router()
const ActivityController = require('../controllers/ActivityController')
const { authentication } = require('../middlewares/auth')

router.use(authentication)

router.get('/', ActivityController.findAll)

router.get('/create', ActivityController.create)

module.exports = router