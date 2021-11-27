const router = require('express').Router();

const { loginUser, logoutUser, createNewUser } = require('../../controllers/userController');

///api/user
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser);
router.route('/').post(createNewUser);

module.exports = router;
