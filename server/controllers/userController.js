const { User } = require('../models');
// const withAuth = require("../../utils/auth");
const bcrypt = require('bcrypt')

module.exports = {
  async loginUser (req, res) {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      const validPassword = await userData.comparePassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      res.json({ user: userData, message: "You are now logged in!" });

    } catch (err) {
      res.status(400).json(err);
    }
  },

  async logoutUser (req,res) {
      console.log('logout?')
      res.json({message: 'logout code here'})
  },

  async createNewUser (req, res) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const userData = await User.create(req.body);

      if(!userData){
        return res.status(400).json({message: "Unable to create new user"})
      }
    
      res.status(200).json(userData)

    } catch (err){
      res.status(400).json(err)
    }
    
  },

  async addNewGame (req, res) {
    try {
      //req body expected to have id (rawgid), title, onWishList true/false
      const addedGame = await User.update({_id: req.params.id}, {$push: {savedGames: req.body}})

      res.json(addedGame)
    } catch (err){
      res.status(400).json(err)
    }
  },
  
  async updateGame (req, res) {  //NOT working yet
    //req.body expected to have id from mongo, onWishList false
    const updatedGame = await User.update({_id: req.params.id}, {$set: {"savedGames.$[_id: req.body.id].onWishList" : req.body.onwishList}})

    res.json(updatedGame)
  },
  
  async deleteGame (req, res) {
    try {
      const deletedGame = await User.update({_id: req.params.id}, {$pull: {savedGames: {_id: req.body.id}}})

      res.json(deletedGame)
    } catch (err){
      res.status(400).json(err)
    }
  },
  
};
