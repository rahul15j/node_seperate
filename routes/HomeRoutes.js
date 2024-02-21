const { Router } = require('express'); 
const {home} = require('../controllers/HomeController')
console.log(home)
const router = Router(); 

 

router.post('/', home);

module.exports = router;
