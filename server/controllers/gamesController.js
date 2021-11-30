const { User } = require('../models');

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
        deletedGame = await User.findOneAndUpdate(
          {_id: req.params.id}, 
          {$pull: {wishList: {rawgId: req.body.rawgId}}},
          { new: true }
          )
      } else {

        deletedGame = await User.findOneAndUpdate(
          {_id: req.params.id}, 
          {$pull: {savedGames: {rawgId: req.body.rawgId}}},
          { new: true }
          )
      }
      res.json(deletedGame)
    } catch (err){
      res.status(400).json(err)
    }
  },
  
};