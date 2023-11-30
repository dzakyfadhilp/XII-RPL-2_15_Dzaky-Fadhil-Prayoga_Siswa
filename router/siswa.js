const express = require('express')
const router = express.Router()

const usercontroller = require('../controller/siswa')

router.get('/siswas', usercontroller.index)

router.get('/siswa/:id', usercontroller.show)

router.post('/siswa', usercontroller.store)

router.put('/siswa/:id', usercontroller.update)
  
router.delete('/siswa/:id', usercontroller.delete)

module.exports = router