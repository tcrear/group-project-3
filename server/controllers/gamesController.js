const { User } = require('../models');
// const withAuth = require("../../utils/auth");
const { signToken } = require('../utils/auth.js')
const bcrypt = require('bcrypt')

module.exports = {
 
  async getGames (req, res) {
    try{
      const gameData = await User.findOne({ where: { _id: req.params.id } });
      const myGames = {savedGames: gameData.savedGames, wishList: gameData.wishList}
      res.json(myGames)
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async addNewGame (req, res) {
    try {
      let addedGame;
      //req body expected to have id (rawgid), title, onWishList true/false
      if(req.body.onWishList){
        addedGame = await User.update(
          {_id: req.params.id}, 
          {$push: {wishList: req.body}},
          { new: true }
          )
      } else {
        addedGame = await User.update(
          {_id: req.params.id}, 
          {$push: {savedGames: req.body}},
          { new: true }
          )
      }
      
      res.json(addedGame)
    } catch (err){
      res.status(400).json(err)
    }
  },
  
  async updateGame (req, res) {  
    console.log(req.body.rawgId)
    //req.body expected to have id from mongo, onWishList false
    try {
      let removedGame;
      let addedGame;
      //req body expected to have id (rawgid), title, onWishList true/false
      if(req.body.onWishList){
        console.log('---------------------move to saved games------------')
        addedGame = await User.findOneAndUpdate(
          {_id: req.params.id}, 
          {$push: {savedGames: req.body}},
          { new: true }
        )
        removedGame = await User.findOneAndUpdate(
          {_id: req.params.id}, 
          {$pull: {wishList: {rawgId: req.body.rawgId}}},
          { new: true }
          )
      } else {
        console.log('-------------------moved to wishlist ------------------')
        addedGame = await User.findOneAndUpdate(
          {_id: req.params.id},
          {$push: {wishList: req.body}},
          { new: true }
          )
        removedGame = await User.findOneAndUpdate(
          {_id: req.params.id}, 
          {$pull: {savedGames: {rawgId: req.body.rawgId}}},
          { new: true }
          )
      }

      res.json(removedGame)
    } catch (err){
      res.status(400).json(err)
    }

  },
  
  async deleteGame (req, res) {
    try {
      let deletedGame;
      //req body expected to have id (rawgid), onWishList true/false
      if(req.body.onWishList){
        console.log('-----------------delete from wishlist---------------')
        deletedGame = await User.findOneAndUpdate(
          {_id: req.params.id}, 
          {$pull: {wishList: {rawgId: req.body.rawgId}}},
          { new: true }
          )
      } else {
        console.log('-----------------delete from saved game---------------')

        deletedGame = await User.findOneAndUpdate(
          {_id: req.params.id}, 
          {$pull: {savedGames: {rawgId: req.body.rawgId}}},
          { new: true }
          )
      }
      console.log(deletedGame)
      res.json(deletedGame)
    } catch (err){
      res.status(400).json(err)
    }
  },
  
};