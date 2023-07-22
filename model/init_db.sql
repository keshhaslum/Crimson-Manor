-- Drop existing tables if they exist
DROP TABLE IF EXISTS clues;
DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS rooms;
-- Create rooms table
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room VARCHAR(50) NOT NULL,
  main_location VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  img VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
);
-- Alter rooms table
ALTER TABLE rooms MODIFY COLUMN img VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL;
-- Populate rooms table
INSERT INTO rooms (room, main_location, description, img) VALUES
('Study', 'mansion', 'The room where the victim''s body was discovered. It is elegantly furnished with antique furniture and lined with bookshelves filled with rare editions.', '📚'),
('Ballroom', 'mansion', 'A grand ballroom with a sparkling chandelier, ornate decorations, and a polished marble floor. It seems to have been recently used for a party.', '💃'),
('Conservatory', 'mansion', 'A tranquil conservatory filled with exotic plants and flowers. It offers a serene escape from the rest of the mansion.', '🌱');

-- Create characters table
CREATE TABLE characters (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  img VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
);
-- Alter characters table
ALTER TABLE characters MODIFY COLUMN img VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL;
-- Populate characters table
INSERT INTO characters (name, last_name, description, img) VALUES 
  ('Emily', 'Green', 'Emily is the victims ambitious assistant, determined to climb the corporate ladder. She has been working for John Parker for years, but rumors suggest she was growing impatient with his management style.', '👩‍'),
  ('Michale', 'Turner', 'Michael is the victims long-time business rival, always trying to outsmart John in the corporate world. They had a history of bitter competition.', '👨'),
  ('Isabella', 'Martínez', 'Isabella is the victims estranged daughter, who resented her father for prioritizing business over family. They had not spoken for years', '💃');
-- Create clues table
CREATE TABLE clues (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL,
  character_id INT NULL,
  img VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  FOREIGN KEY (character_id) REFERENCES characters(id)
);
-- Alter clues table
ALTER TABLE clues MODIFY COLUMN img VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL;
-- Populate clues table
INSERT INTO clues (description, character_id, img) VALUES
('A signed document granting Emily access to John''s personal accounts', 1, '📝🔒'),
('A note discussing a secret business deal known only to Emily and John.', 1, '🗒️🤝'),
('A picture of Emily and the victim taken at a company event.', 1, '📷👩🏽'),
('A threatening letter from an anonymous sender, warning Emily to stay away from John Parker.', 1, '💌⛔'),
('A cufflink found in the study, matching the one Emily was wearing at the party.', 1, '💼🔗'),
('A torn page from Emily''s journal, expressing frustration and anger towards the victim.', 1, '📄😡'),
('A business contract that shows Michael lost a significant deal to John.', 2, '📃💼'),
('A burner phone with messages discussing a secret plan against John.', 2, '📱🔥'),
('A photo of Michael and the victim engaged in a heated argument at a public event.', 2, '📷👨💼'),
('A blueprint of the mansion, suggesting he knew the layout well.', 2, '🏠📐'),
('A torn piece of paper with John''s schedule for the night of the murder.', 2, '🗓️📄'),
('A disguised costume found in the conservatory, possibly used to sneak into the mansion unnoticed.', 2, '🎭🏛️'),
('A heartfelt letter from Isabella to her father, expressing her disappointment and longing for a relationship.', 3, '💌👨👧'),
('A necklace with a family heirloom charm, gifted to Isabella by her father.', 3, '💎🎁'),
('A newspaper article about a charity event John attended, hinting at a possible reconciliation.', 3, '📰🤝'),
('A torn photograph of Isabella and the victim during happier times.', 3, '🖼️😔'),
('A voice recording of a heated argument between Isabella and John, suggesting a recent confrontation.', 3, '🎙️🗣️'),
('A locket found in the conservatory, containing a picture of Isabella and her father.', 3, '🏛️🔐'),
('A handwritten note mentioning a secret meeting at midnight', NULL, '🕛'),
('A torn business card with an unknown name and phone number', NULL, '📇'),
('An empty vial labeled "Poison"', NULL, '💀'),
('A receipt from a nearby gun store', NULL, '🛒'),
('A hidden compartment in the victim''s desk containing a stack of cash', NULL, '💰'),
('A cryptic message written in code', NULL, '📝'),
('A pair of gloves stained with red ink', NULL, '🧤💉'),
('A broken pocket watch, frozen at the time of death', NULL, '⏲️❄️'),
('A map of the mansion with a marked X in an unknown location', NULL, '🗺️❓'),
('A diary entry expressing the victim''s fear of someone close to them', NULL, '👥📖'),
('A rare flower petal found in the victim''s pocket', NULL, '🌸'),
('A torn page from a travel brochure featuring a distant location', NULL, '🗺️🌴'),
('A locked safe with an unknown combination', NULL, '🔒❓'),
('A letter from a mysterious organization demanding a large sum of money', NULL, '💸🔍'),
('A hidden compartment in the conservatory containing a hidden camera', NULL, '🌿📷'),
('A torn-up business proposal with the victim''s initials on it', NULL, '💼✂️'),
('A cryptic crossword puzzle with a partially completed solution', NULL, '📝🧩'),
('A rare book with a bookmark in a suspicious chapter', NULL, '📚🔍'),
('A mysterious key with no discernible purpose', NULL, '🔑❓'),
('A torn-up invitation to a secret society gathering', NULL, '🎩🔍'),
('A bloodstained handkerchief found in the ballroom', NULL, '💃💔');
