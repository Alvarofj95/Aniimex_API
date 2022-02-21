const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


// Add Anime
router.post('/addAnime', controller.animeCreate);
// Get All Anime
router.get('/animes', controller.animeReturn);
// Get Anime Id
router.get('/animes/:id', controller.animeDetails);
// Get Anime Category
router.get('/animes/category/:category', (req, res) => {
    controller.animeCategory (req, res);
} );
// Update Anime
router.put('/updateAnime/:id', controller.animeUpdate);
// Delete Anime
router.delete('/deleteAnime/:id', controller.animeDelete);


module.exports = router;