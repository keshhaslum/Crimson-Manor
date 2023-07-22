const express = require('express');
const router = express.Router();
const db = require('../model/helper.js');

// Endpoint to fetch a random character and related clues
router.get('/', async (req, res) => {
  try {
    // SELECT a random character from the database
    const randomCharacterSql = `SELECT * FROM characters ORDER BY RAND() LIMIT 1;`;
    const randomCharacterResult = await db(randomCharacterSql);
    const randomCharacter = randomCharacterResult.data[0]; // Access the result data array

    console.log('Random Character:', randomCharacter);

    // SELECT 3 random clues related to the selected character
    const characterId = randomCharacter.id;
    const relatedCluesSql = `SELECT * FROM clues WHERE character_id = ${characterId} ORDER BY RAND() LIMIT 3;`;
    const relatedCluesResult = await db(relatedCluesSql);
    const relatedClues = relatedCluesResult.data; // Access the result data array

    // SELECT 6 random clues with character_id as null
    const unrelatedCluesSql = `SELECT * FROM clues WHERE character_id IS NULL ORDER BY RAND() LIMIT 6;`;
    const unrelatedCluesResult = await db(unrelatedCluesSql);
    const unrelatedClues = unrelatedCluesResult.data; // Access the result data array


    // Combine the results and send the response
    const response = {
      character: randomCharacter,
      relatedClues: relatedClues,
      unrelatedClues: unrelatedClues,
    };
    res.json(response);
  } catch (err) {
    console.error('Error retrieving data', err);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

module.exports = router;

