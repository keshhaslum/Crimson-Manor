CREATE TABLE characters (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  is_detective TINYINT(1) NOT NULL,
  is_victim TINYINT(1) NOT NULL,
  is_suspect TINYINT(1) NOT NULL,
  img VARCHAR(255) NOT NULL
);


CREATE TABLE clues (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL,
  character_id INT NOT NULL,
  img VARCHAR(255) NOT NULL,
  FOREIGN KEY (character_id) REFERENCES characters(id)
);


CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room INT NOT NULL,
  main_location VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  img VARCHAR(255) NOT NULL
);