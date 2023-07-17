var express = require('express');
var router = express.Router();
const db = require('../model/helper.js');

// GET all rooms
// will deliver: [{id: 0, room: string, description: string, img: string}]
router.get('/', async function(req, res, next) {
    const sql = `SELECT * FROM rooms;`;
  
    try {
      
      const results = await db(sql);
      res.send(results);
  
    } catch (err) {
      console.error('Error retrieving rooms', error);
      res.status(500).json({ error: 'Failed to retrieve rooms' });
    }
  
  });
  
  
  
  
  // GET room by ID
  // will deliver: {id: 0, room: string, description: string, img: string}
  router.get('/:id', async function(req, res, next) {
    const roomId = req.params.id;
    const sql = `SELECT * FROM rooms WHERE id = ('${roomId}');`;
    
    try {
      
      const results = await db(sql);
      res.send(results);
  
    } catch (err) {
      console.error('Error retrieving room', error);
      res.status(500).json({ error: 'Failed to retrieve room' });
    }
    
  });


  module.exports = router;