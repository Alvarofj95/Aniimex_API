let Anime = require('../model/Anime');
let User = require('../model/User');

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
    Anime.find({category: req.params.category}, (error, data) => {
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

//
// USERS
//
// Add User
exports.userCreate = function(req, res, next) {
  User.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
    console.log('User created successfully!')
  }
})
};

// Get All User
exports.userReturn = function(req, res){
  User.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
    console.log('User got successfully!')
  }
})
};

// Get User Id
exports.userDetails = function(req, res){
  User.findById(req.params.id, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
    console.log('User got id successfully!')
  }
})
};

// Update User
exports.userUpdate = function(req, res, next){
  User.findByIdAndUpdate(req.params.id, {
  $set: req.body
}, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.json(data)
    console.log('User updated successfully!')
  }
})
};

// Delete User
exports.userDelete = function(req, res,next){
  User.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
    console.log('User deleted successfully!')
  }
})
};