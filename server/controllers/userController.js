const { User } = require('../models');
// const withAuth = require("../../utils/auth");
const { signToken } = require('../utils/auth.js')
const bcrypt = require('bcrypt')

module.exports = {
  async loginUser (req, res) {
    try {
      const userData = await User.findOne({ email: req.body.email });
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

      const token = signToken(userData)
  
      res.json({ savedGames: userData.savedGames, wishList: userData.wishList, token: token, message: "You are now logged in!" });

    } catch (err) {
      res.status(400).json(err);
    }
  },

  async createNewUser (req, res) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const userData = await User.create(req.body);

      if(!userData){
        return res.status(400).json({message: "Unable to create new user"})
      }

      const token = signToken(userData)
    
      res.status(200).json({ savedGames: userData.savedGames, wishList: userData.wishList, token: token})

    } catch (err){
      res.status(400).json(err)
    }
    
  }

};
