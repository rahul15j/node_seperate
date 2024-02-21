const  CrudTwo  = require("../models/crud");

// module.exports = (req, res) => { 
// 	res.send("update") 
// };

// const updateApp = async(req, res) => {
//     const crud = await Crud.findByIdAndUpdate(
//         req.params.crudID,
//         {
//           title:req.body.title,
//           description:req.body.description,
//           completed:req.body.completed,
//         },
//         { new: true}
//     )

//      res.send(crud);
// }


exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    CrudTwo.findByIdAndUpdate(id, req.body, { new:true, useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
          
        } else res.send({ message: "Tutorial was updated successfully.",data});
        
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
      
  };
  

// module.exports = {
    
//     updateApp
    
    
//   };
  