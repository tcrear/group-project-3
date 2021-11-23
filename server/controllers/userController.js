const { User } = require('../models');
// const withAuth = require("../../utils/auth");
const router = require("express").Router();


//logoutUser, createNewUser, addNewGame, updateGame, deleteGame

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
  
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Incorrect email or password, please try again" });
        return;
      }
  
      req.session.save(() => {   //are we still going to use session 
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  async logoutUser (req,res) {
      if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
  },

  async createNewUser (req, res) {
    console.log(req)
    res.json('done')
  },

  async addNewGame (req, res) {
    console.log(req)
    res.json('done')
  },
  
  async updateGame (req, res) {

  },
  
  async deleteGame (req, res) {

  },
  
  // async createProduct({ body }, res) {
  //   const product = await Product.create(body);

  //   if (!product) {
  //     return res.status(400).json({ message: 'Unable to create Product' });
  //   }

  //   res.status(200).json(product);
  // },

  // async updateProduct(req, res) {
  //   const product = await Product.findOneAndUpdate(
  //     { _id: req.params.id },
  //     req.body,
  //     { new: true }
  //   );

  //   if (!product) {
  //     return res.status(400).json({ message: 'Unable to update Product' });
  //   }

  //   res.status(200).json(product);
  // },

  // async getAllProducts(req, res) {
  //   const allProducts = await Product.find({});

  //   if (!allProducts) {
  //     return res.status(400).json({ message: 'No products found' });
  //   }

  //   res.status(200).json(allProducts);
  // }
};
