# Murder Mystery Game

[🔗 Live preview](https://murder-mystery.onrender.com/)

This repository contains the implementation of a murder mystery game using React.js and Express (Node.js). The objective of the game is to find out who committed the crime. The implementation includes async/await for handling API requests.

### 🟡 Version 1

- **🌱 Next version:** Expand the database.
- **👾 Bugs:** When a clue is selected from the modal, it should automatically close.

### 📦 Dependencies

1. Run `npm install` in project directory.

2. `cd client` and run `npm install`.

3. Run `npm install react-router-dom`.

### 🗂️ File structure:

    📗 MURDER MYSTERY
    	├── 📂 bin
    	├── 📂 client
    	│    ├── 📂 src
    	│    │   ├── 📂 components
    	│    │   │   ├── 💙 Characters.jsx
    	│    │   │   ├── 💙 ChosenClues.jsx
    	│    │   │   ├── 💙 Clue.jsx
    	│    │   │   ├── 💙 Crime.jsx
    	│    │   │   ├── 💙 FinalPage.jsx
    	│    │   │   ├── 💙 Homepage.jsx
    	│    │   │   ├── 💙 Instruction.jsx
    	│    │   │   ├── 💙 Menu.jsx
    	│    │   │   ├── 💙 Modal.jsx
    	│    │   │   ├── 💙 Rooms.jsx
    	│    │   │   └── 💙 Scene.jsx
    	│    │   ├── 🎨 App.css
    	│    │   ├── 💙 App.jsx
    	│    │   ├── 🎨 index.css
    	│    │   ├── 💙 main.jsx
    	│    │   ├── 💙 selectedCluesContext.jsx
    	│    │   └── 💙 selectedSuspectContext.jsx
    	│    ├── 📄 index.html
    	│    ├── 🎨 storm.css
    	│    └── 💛 storm.js
    	├── 📂 model
    	│    ├── 💛 database.js
    	│    ├── 💛 helper.js
    	│    └── 💾 init_db.sql
    	├── 📂 public
    	├── 📂 routes
    	│    ├── 💛 characters.js
    	│    ├── 💛 clues.js
    	│    ├── 💛 index.js
    	│    ├── 💛 random.js
    	│    └── 💛 rooms.js
    	├── 💛 app.js
    	└── 📖 README.md


### 💾 Database Setup

1. Create a database called `murdermystery`.
2. Create a `.env` file in the project directory with the following structure:

| Variable | Value         |
| -------- | ------------- |
| DB_HOST  | localhost     |
| DB_USER  | `<username>`  |
| DB_NAME  | murderMystery |
| DB_PASS  | `<password>`  |

3. Run `npm run migrate`.

## 📋 Tables in murdermystery:

| Tables_in_murdermystery |
| ----------------------- |
| characters              |
| clues                   |
| rooms                   |

## 📋 Table structure for characters:

| Field         | Type         | Null | Key | Default | Extra          |
| ------------- | ------------ | ---- | --- | ------- | -------------- |
| id            | int          | NO   | PRI | NULL    | auto_increment |
| name          | varchar(50)  | NO   |     | NULL    |                |
| last_name     | varchar(50)  | NO   |     | NULL    |                |
| description   | text         | NO   |     | NULL    |                |
| what_happened | text         | NO   |     | NULL    |                |
| img           | varchar(255) | NO   |     | NULL    |                |

## 📋 Data in the clues characters:

| id  | name     | last_name | description                                                                                                                                                                                                 | what_happened                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | img |
| --- | -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| 1   | Janet    | Green     | Janet is the victims ambitious assistant, determined to climb the corporate ladder. She has been working for John Parker for years, but rumors suggest she was growing impatient with his management style. | Janet Green's ambition drove her to murder John Parker. She used the signed document to access his personal accounts and uncovered a secret business deal that could ruin her reputation. Fearing exposure, she sent the threatening letter to scare him away. On the night of the murder, she attended the party in the ballroom, wearing the cufflinks to establish an alibi. Later, she followed John to the study, where she shot him and left the murder weapon behind to frame someone else.                                                                                                         | ‍👩🏻‍🦰 |
| 2   | Michael  | Turner    | Michael is the victims long-time business rival, always trying to outsmart John in the corporate world. They had a history of bitter competition.                                                           | Michael Turner's envy of John Parker's success pushed him over the edge. He planned to sabotage John's business deal, using the burner phone to coordinate the attack. He confronted John in the study, leading to a heated argument. In a fit of rage, he shot John and fled the scene, leaving behind the disguised costume as a diversion.                                                                                                                                                                                                                                                              | 👨🏻  |
| 3   | Isabella | Martínez  | Isabella is the victims estranged daughter, who resented her father for prioritizing business over family. They had not spoken for years                                                                    | Isabella Martinez's deep-seated resentment towards her father led her to commit the crime. She longed for a reconciliation but felt ignored by John. She confronted him in the study, expressing her frustration and anger. The argument escalated, and in a moment of intense emotion, she shot him. Realizing what she had done, she fled the scene, leaving behind the locket as a painful reminder of their broken relationship. With this information, you can populate the database and generate a randomly generated murder-mystery game each time the user plays. Enjoy the game creation process! | 💃  |

## 📋 Table structure for clues:

| Field        | Type         | Null | Key | Default | Extra          |
| ------------ | ------------ | ---- | --- | ------- | -------------- |
| id           | int          | NO   | PRI | NULL    | auto_increment |
| description  | text         | NO   |     | NULL    |                |
| character_id | int          | YES  |     | NULL    |                |
| img          | varchar(255) | NO   |     | NULL    |                |

## 📋 Data in the clues table:

| id  | description                                                                                                   | character_id | img    |
| --- | ------------------------------------------------------------------------------------------------------------- | ------------ | ------ |
| 1   | A signed document granting Emily access to John's personal accounts                                           | 1            | 📝🔒   |
| 2   | A note discussing a secret business deal known only to Emily and John.                                        | 1            | 🗒️🤝   |
| 3   | A picture of Emily and the victim taken at a company event.                                                   | 1            | 📷👩🏽   |
| 4   | A threatening letter from an anonymous sender, warning Emily to stay away from John Parker.                   | 1            | 💌⛔   |
| 5   | A cufflink found in the study, matching the one Emily was wearing at the party.                               | 1            | 💼🔗   |
| 6   | A torn page from Emily's journal, expressing frustration and anger towards the victim.                        | 1            | 📄😡   |
| 7   | A business contract that shows Michael lost a significant deal to John.                                       | 2            | 📃💼   |
| 8   | A burner phone with messages discussing a secret plan against John.                                           | 2            | 📱🔥   |
| 9   | A photo of Michael and the victim engaged in a heated argument at a public event.                             | 2            | 📷👨💼 |
| 10  | A blueprint of the mansion, suggesting he knew the layout well.                                               | 2            | 🏠📐   |
| 11  | A torn piece of paper with John's schedule for the night of the murder.                                       | 2            | 🗓️📄   |
| 12  | A disguised costume found in the conservatory, possibly used to sneak into the mansion unnoticed.             | 2            | 🎭🏛️   |
| 13  | A heartfelt letter from Isabella to her father, expressing her disappointment and longing for a relationship. | 3            | 💌👨👧 |
| 14  | A necklace with a family heirloom charm, gifted to Isabella by her father.                                    | 3            | 💎🎁   |
| 15  | A newspaper article about a charity event John attended, hinting at a possible reconciliation.                | 3            | 📰🤝   |
| 16  | A torn photograph of Isabella and the victim during happier times.                                            | 3            | 🖼️😔   |
| 17  | A voice recording of a heated argument between Isabella and John, suggesting a recent confrontation.          | 3            | 🎙️🗣️   |
| 18  | A locket found in the conservatory, containing a picture of Isabella and her father.                          | 3            | 🏛️🔐   |
| 19  | A handwritten note mentioning a secret meeting at midnight.                                                   | NULL         | 🕛     |
| 20  | A torn business card with an unknown name and phone number.                                                   | NULL         | 📇     |
| 21  | An empty vial labeled "Poison".                                                                               | NULL         | 💀     |
| 22  | A receipt from a nearby gun store.                                                                            | NULL         | 🛒     |
| 23  | A hidden compartment in the victim's desk containing a stack of cash.                                         | NULL         | 💰     |
| 24  | A cryptic message written in code.                                                                            | NULL         | 📝     |
| 25  | A pair of gloves stained with red ink.                                                                        | NULL         | 🧤💉   |
| 26  | A broken pocket watch, frozen at the time of death.                                                           | NULL         | ⏲️❄️   |
| 27  | A map of the mansion with a marked X in an unknown location.                                                  | NULL         | 🗺️❓   |
| 28  | A diary entry expressing the victim's fear of someone close to them.                                          | NULL         | 👥📖   |
| 29  | A rare flower petal found in the victim's pocket.                                                             | NULL         | 🌸     |
| 30  | A torn page from a travel brochure featuring a distant location.                                              | NULL         | 🗺️🌴   |
| 31  | A locked safe with an unknown combination.                                                                    | NULL         | 🔒❓   |
| 32  | A letter from a mysterious organization demanding a large sum of money.                                       | NULL         | 💸🔍   |
| 33  | A hidden compartment in the conservatory containing a hidden camera.                                          | NULL         | 🌿📷   |
| 34  | A torn-up business proposal with the victim's initials on it.                                                 | NULL         | 💼✂️   |
| 35  | A cryptic crossword puzzle with a partially completed solution.                                               | NULL         | 📝🧩   |
| 36  | A rare book with a bookmark in a suspicious chapter.                                                          | NULL         | 📚🔍   |
| 37  | A mysterious key with no discernible purpose.                                                                 | NULL         | 🔑❓   |
| 38  | A torn-up invitation to a secret society gathering.                                                           | NULL         | 🎩🔍   |
| 39  | A bloodstained handkerchief found in the ballroom.                                                            | NULL         | 💃💔   |

## 📋 Table structure for rooms:

| Field         | Type         | Null | Key | Default | Extra          |
| ------------- | ------------ | ---- | --- | ------- | -------------- |
| id            | int          | NO   | PRI | NULL    | auto_increment |
| room          | varchar(50)  | NO   |     | NULL    |                |
| main_location | varchar(50)  | NO   |     | NULL    |                |
| description   | text         | NO   |     | NULL    |                |
| img           | varchar(255) | NO   |     | NULL    |                |

## 📋 Data in the rooms table:

| id  | room         | main_location | description                                                                                                                                             | img |
| --- | ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| 1   | Study        | mansion       | The room where the victim's body was discovered. It is elegantly furnished with antique furniture and lined with bookshelves filled with rare editions. | 📚  |
| 2   | Ballroom     | mansion       | A grand ballroom with a sparkling chandelier, ornate decorations, and a polished marble floor. It seems to have been recently used for a party.         | 💃  |
| 3   | Conservatory | mansion       | A tranquil conservatory filled with exotic plants and flowers. It offers a serene escape from the rest of the mansion.                                  | 🌱  |
