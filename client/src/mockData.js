const murderer = 3;

const allCharacters = [
  {
    id: 1,
    name: 'Emily',
    last_name: 'Green',
    description: `Emily is the victim's ambitious assistant, determined to climb the corporate ladder. She has been working for John Parker for years, but rumors suggest she was growing impatient with his management style.`,
    what_happened: `Emily Green's ambition drove her to murder John Parker. She used the signed document to access his personal accounts and uncovered a secret business deal that could ruin her reputation. Fearing exposure, she sent the threatening letter to scare him away. On the night of the murder, she attended the party in the ballroom, wearing the cufflinks to establish an alibi. Later, she followed John to the study, where she shot him and left the murder weapon behind to frame someone else.`,
    img: '👩🏻‍🦰',
  },
  {
    id: '2',
    name: 'Michale',
    last_name: 'Turner',
    description: `Michael is the victim's long-time business rival, always trying to outsmart John in the corporate world. They had a history of bitter competition.`,
    what_happened: `Michael Turner's envy of John Parker's success pushed him over the edge. He planned to sabotage John's business deal, using the burner phone to coordinate the attack. He confronted John in the study, leading to a heated argument. In a fit of rage, he shot John and fled the scene, leaving behind the disguised costume as a diversion.`,
    img: '👨🏻',
  },
  {
    id: '3',
    name: 'Isabella',
    last_name: 'Martínez',
    description: `Isabella is the victim's estranged daughter, who resented her father for prioritizing business over family. They had not spoken for years`,
    what_happened: `Isabella Martinez's deep-seated resentment towards her father led her to commit the crime. She longed for a reconciliation but felt ignored by John. She confronted him in the study, expressing her frustration and anger. The argument escalated, and in a moment of intense emotion, she shot him. Realizing what she had done, she fled the scene, leaving behind the locket as a painful reminder of their broken relationship. With this information, you can populate the database and generate a randomly generated murder-mystery game each time the user plays. Enjoy the game creation process!`,
    img: '💃',
  },
];

const allRooms = [
  {
    id: '1',
    room: 'study',
    main_location: 'mansion',
    description: `The room where the victim's body was discovered. It is elegantly furnished with antique furniture and lined with bookshelves filled with rare editions.`,
    img: '📚',
  },
  {
    id: '2',
    room: 'ballroom',
    main_location: 'mansion',
    description: `A grand ballroom with a sparkling chandelier, ornate decorations, and a polished marble floor. It seems to have been recently used for a party.`,
    img: '👯',
  },
  {
    id: '3',
    room: 'conservatory',
    main_location: 'mansion',
    description: `A tranquil conservatory filled with exotic plants and flowers. It offers a serene escape from the rest of the mansion.`,
    img: '🪴',
  },
];

const allMurdererClues = [
  {
    id: '13',
    description: `A heartfelt letter from Isabella to her father, expressing her disappointment and longing for a relationship.`,
    character_id: '3',
    img: '💌👨‍👧',
  },
  {
    id: '16',
    description: `A torn photograph of Isabella and the victim during happier times.`,
    character_id: '3',
    img: '🖼️😔',
  },
  {
    id: '18',
    description: `A locket found in the conservatory, containing a picture of Isabella and her father.`,
    character_id: '3',
    img: '🏛️🔐',
  },
];

const allFakeClues = [
  {
    id: '0',
    description: 'test clue',
    character_id: 'null',
    img: '💙',
  },
  {
    id: '0',
    description: 'test clue',
    character_id: 'null',
    img: '💙',
  },
  {
    id: '0',
    description: 'test clue',
    character_id: 'null',
    img: '💙',
  },
  {
    id: '0',
    description: 'test clue',
    character_id: 'null',
    img: '💙',
  },
  {
    id: '0',
    description: 'test clue',
    character_id: 'null',
    img: '💙',
  },
  {
    id: '0',
    description: 'test clue',
    character_id: 'null',
    img: '💙',
  },
];
export default { allRooms, allFakeClues, allMurdererClues, allCharacters };
