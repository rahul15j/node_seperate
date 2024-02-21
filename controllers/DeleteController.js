const  CrudTwo  = require("../models/crud");

// module.exports = (req, res) => { 
// 	res.send("delete") 
// };

// const deleteApp = (req, res)=>{
//     const crud =  Crud.findByIdAndDelete(req.params.crudID).then(crud =>{
//         if(crud) {
//             return res.status(200).json({success: true, message: 'the id related data is deleted'})
//         } else {
//             return res.status(404).json({success: false , message: "data not found"})
//         }
//     })
//   }


  exports.del = (req, res) => {
    const id = req.params.id;
  
    CrudTwo.findByIdAndDelete(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

// module.exports = {
    
//     deleteApp
    
    
//   };
  
