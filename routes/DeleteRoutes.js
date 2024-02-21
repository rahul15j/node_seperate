const { Router } = require('express'); 
const {del} = require('../controllers/DeleteController')
const router = Router(); 

router.delete('/delete/:id', del); 

module.exports = router;

 