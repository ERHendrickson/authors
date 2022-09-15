const Author = require('../models/aurthor.model');

//-----------------------DISPLAY ALL-----------------------------
module.exports.showAllAuthor = (req,res) => {
    Author.find()
    .then(foundAuthors => {
        res.json({results: foundAuthors})
    })
    .catch(err => {
        res.json({message: "Something went wrong with find all", err:err})
    })
}
//-----------------------DISPLAY ONE-----------------------------
module.exports.findOneAuthor = (req,res) => {
    Author.findOne({_id:req.params.id})
    .then((foundAuthor) => {
        res.json({results: foundAuthor})
    })
    .catch(err=>res.json({message: "something went wrong with display one", err:err}))
}
//-----------------------CREATE----------------------------------
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => {res.json({results: newAuthor})})
    .catch(err => res.status(400).json({err: err}))
}
//-----------------------UPDATE----------------------------------
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id:req.params.id}, 
        req.body, 
        {new:true, runValidators: true}
    )
    .then((updateAuthor) => {
        res.json({results: updateAuthor})
    })
    .catch(err => res.status(400).json({err: err}))
}

//-----------------------DELETE----------------------------------
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
    .then((deletedAuthor) => {res.json({results: deletedAuthor})})
    .catch( (err) => {res.json({message: "Something went wrong with delete", err: err})})
}