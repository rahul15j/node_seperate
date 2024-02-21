const  CrudTwo  = require("../models/crud");

// module.exports = (req, res) => { 
// 	res.send("get") 
// };

// const getApp = async(req, res) => {
//     const getAll = await CrudTwo.find();
//     res.send(getAll)
    
//   };
  

  exports.get = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    CrudTwo.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };  


// module.exports = {
    
//     getApp
    
    
//   };
  