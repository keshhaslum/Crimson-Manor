var express = require('express');
var router = express.Router();
const db = require('../model/helper.js');

// GET all characters
// will deliver: [{id: int, name: string, last_name: string, description: string, img: string}]

router.get('/', async function(req, res, next) {
  const sql = `SELECT * FROM characters;`;
 

  try {
    
    const results = await db(sql)
    
    res.send(results);
  } catch (err) {
    console.error('Error retrieving characters:', error);
    res.status(500).json({ error: 'Failed to retrieve characters' });
  }


});


// GET character by ID
// will deliver: {id: 0, name: string, last_name: string, description: string, img: string}

router.get('/:id', async function(req, res, next) {
  const characterId = req.params.id;
  const sql = `SELECT * FROM characters WHERE id = ('${characterId}');`;
  
  try {
    
    const results = await db(sql)
    
    res.send(results);
  } catch (err) {
    console.error('Error retrieving character', error);
    res.status(500).json({ error: 'Failed to retrieve characters' });
  }
  

});
  









// router.get("/random/:id", async function (req, res) {
//   const characterId = (req.params.id);

// query = (`SELECT * FROM clues WHERE character_id = ${characterId} LIMIT 1`);

// try {
    
//   const results = await db(query);
//   res.json(results);

//   if (results.length > 0) {
//     clues.push(results[0]);
//   }

// } catch (err) {
//   console.error('Error retrieving clue', error);
//   res.status(500).json({ error: 'Error' });
// }

// secondQuery = (`SELECT * FROM clues WHERE character_id = -1 ORDER BY RAND() LIMIT 2`);

//   try {
    
//     const results = await db(secondQuery);
//     res.json(results);
  
//     if (results.length > 0) {
//       clues.push(results[0]);
//     }
  
//   } catch (err) {
//     console.error('Error retrieving clue', error);
//     res.status(500).json({ error: 'Error' });
//   }
  
  
// clues.push(...results);

// });





// router.get('/rooms/:roomId', (req, res) => {
//   const roomId = req.params.roomId;
  
//   // Query the database to retrieve room details
//   const sql = `SELECT * FROM rooms WHERE id = ?`;
//   db(sql, [roomId], (error, roomResult) => {
//     if (error) {
//       console.error('Error retrieving room:', error);
//       res.status(500).json({ error: 'Failed to retrieve room' });
//     } else {
//       const room = roomResult[0];
      
//       // Query the database to retrieve clues for the specified room
//       const cluesQuery = `SELECT * FROM clues WHERE character_id IN 
//                           (SELECT id FROM characters WHERE room_id = ?)`;
//       db(cluesQuery, [roomId], (error, cluesResult) => {
//         if (error) {
//           console.error('Error retrieving clues:', error);
//           res.status(500).json({ error: 'Failed to retrieve clues' });
//         } else {
//           room.clues = cluesResult;
//           res.json(room);
//         }
//       });
//     }
//   });
// });





module.exports = router;

// All the things that need to be queried.
// 1. Endpoint for all characters- return an array of objects containing all necessary fields (id, name, last_name, description, img) from characters table. Get requests: Get all characters and Get characters by id (this should return an object).
// [{id: int, name: string, last_name: string, description: string, img: string}]- get characters; same for get by id, but an object
// 2. Clues should be an array of objects
// 3. Rooms should be an array of objects
// 4. At the end of the game, booleans need to go back to false/default


// The murderer was randomly picked and is the character with the id 3

