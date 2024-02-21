const  CrudTwo  = require("../models/crud");




// module.exports = (req, res) => { 
// 	res.send("Home") 
// };

// const createApp = async(req, res) => {
//     const crud = new CrudTwo({
//       title: req.body.title,
//       description: req.body.description,
//       completed: req.body.completed,
//     });
  
//     save = await crud.save();
//     res.json(save)
    
//   };


exports.home = (req, res) => {
    
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    console.log(req.body);
  
    // Create a Tutorial
    const crud = new CrudTwo({
      title:req.body.title,
      description:req.body.description,
      completed:req.body.completed,
    });
  
    // Save Tutorial in the database
      crud.save()
      
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };



// module.exports = {
//     createApp
    
    
//   };
  