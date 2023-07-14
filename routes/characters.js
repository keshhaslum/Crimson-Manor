var express = require('express');
var router = express.Router();

// GET all characters
// will deliver: [{id: int, name: string, last_name: string, description: string, img: string}]
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// GET character by ID
// will deliver: {id: 0, name: string, last_name: string, description: string, img: string}
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Get all clues
// will deliver: [{id: 0, description: string, img: string}]
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// Get clue by ID
// will deliver: {id: 0, description: string, img: string}
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// All the things that need to be queried.
// 1. Endpoint for all characters- return an array of objects containing all necessary fields (id, name, last_name, description, img) from characters table. Get requests: Get all characters and Get characters by id (this should return an object).
// [{id: int, name: string, last_name: string, description: string, img: string}]- get characters; same for get by id, but an object
// 2. Clues should be an array of objects
// 3. Rooms should be an array of objects
// 4. At the end of the game, booleans need to go back to false/default

// The murderer was randomly picked and is the character with the id 3
