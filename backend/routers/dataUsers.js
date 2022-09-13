const express=require('express')
const {formData} = require('../controllers/dataControllers')

const router = express.Router()

router.route('/').post(formData)

module.exports=router;