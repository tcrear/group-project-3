const { User } = require('../models');

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
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.logged_in = true;
        res.json({ user: userData, message: "You are now logged in!" });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  }

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
