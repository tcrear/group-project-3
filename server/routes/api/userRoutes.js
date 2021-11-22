const router = require('express').Router();

const { loginUser, logoutUser, createNewUser, addNewGame, updateGame, deleteGame } = require('../../controllers/userController');

router.route('/login').get(loginUser)
router.route('/logout').get(logoutUser);
router.route('/').post(createNewUser);
router.route('/:id').post(addNewGame);
router.route('/:id').put(updateGame)
router.route('/:id').delete(deleteGame);

module.exports = router;
