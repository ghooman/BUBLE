const router = require('express').Router();
const { item } = require('../controller');

// router.get('/', item.item);
router.get('/:userfav/fav', item.item.favbrand.get);
router.get('/:itemId', item.item.dp.get);
router.get('/popular', item.item.dp.get);

module.exports = router;
