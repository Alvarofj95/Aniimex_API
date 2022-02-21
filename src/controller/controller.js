let Anime = require('../model/Anime');

// Add Anime
exports.animeCreate = function(req, res, next) {
    Anime.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Anime created successfully!')
    }
  })
};

// Get All Anime
exports.animeReturn = function(req, res){
    Anime.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Anime got successfully!')
    }
  })
};

// Get Anime Id
exports.animeDetails = function(req, res){
    Anime.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Anime got id successfully!')
    }
  })
};

// Get Anime Category
exports.animeCategory = function(req, res){
    Anime.findById(req.params.category, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Anime got category successfully!')
    }
  })
};

// Update Anime
exports.animeUpdate = function(req, res, next){
    Anime.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Anime updated successfully!')
    }
  })
};

// Delete Anime
exports.animeDelete = function(req, res,next){
    Anime.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
      console.log('Anime deleted successfully!')
    }
  })
};