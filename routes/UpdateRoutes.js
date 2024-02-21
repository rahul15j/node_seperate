const { Router } = require('express'); 
const {update} = require('../controllers/UpdateController')
const router = Router(); 

router.put('/update/:id', update);
module.exports = router;

 