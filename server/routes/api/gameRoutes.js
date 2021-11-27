const router = require('express').Router();

const { addNewGame, updateGame, deleteGame, getGames } = require('../../controllers/gamesController');

///api/user
router.route('/:id').get(getGames)
router.route('/:id').post(addNewGame);
router.route('/:id').put(updateGame)
router.route('/:id').delete(deleteGame);

module.exports = router;