const router = require('express').Router();

const { addNewGame, updateGame, deleteGame, getGames } = require('../../controllers/gamesController');
const { authMiddleware } = require('../../utils/auth');

///api/user
router.route('/:id').get(authMiddleware, getGames)
router.route('/:id').post(authMiddleware, addNewGame);
router.route('/:id').put(authMiddleware, updateGame)
router.route('/:id').delete(authMiddleware, deleteGame);

module.exports = router;