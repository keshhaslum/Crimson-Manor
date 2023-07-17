var express = require('express');
var router = express.Router();
const db = require('../model/helper.js');




// GET all clues
// will deliver: [{id: 0, description: string, img: string}]

router.get('/', async function(req, res, next) {
    const sql = `SELECT * FROM clues;`;
    console.log("hello, whatever")
    try {
     console.log(sql);
      const results = await db(sql);
      console.log(results);
      res.send(results);
  
    } catch (error) {
      console.error('Error retrieving clues', error);
      res.status(500).json({ error: 'Failed to retrieve clues' });
    }
  });
  
    
    
  
  
  // GET clue by ID
  // will deliver: {id: 0, description: string, img: string}
  
  router.get('/:id', async function(req, res, next) {
    const clueId = req.params.id;
    const sql = `SELECT * FROM clues WHERE id = ('${clueId}');`;
  
    try {
      
      const results = await db(sql);
      res.send(results);
  
    } catch (err) {
      console.error('Error retrieving clue', error);
      res.status(500).json({ error: 'Failed to retrieve clue' });
    }
  
  });


  module.exports = router;