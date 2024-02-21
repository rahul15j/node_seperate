const { Router } = require('express'); 
const {get} = require('../controllers/GetController')
const router = Router(); 

router.get('/get', get);
module.exports = router;

 