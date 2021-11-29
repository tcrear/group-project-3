const router = require('express').Router();

const { loginUser, createNewUser } = require('../../controllers/userController');

///api/user
router.route('/login').post(loginUser)
router.route('/').post(createNewUser);

module.exports = router;
