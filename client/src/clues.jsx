import React, { useContext } from 'react';
import { useState } from 'react';

const AuthContext = React.createContext();

function CluesProvider({ children }) {
  const [chosenClues, setChosenClues] = useState([]);

  const addClues = (clue) => {
    setChosenClues((prevClues) => [...prevClues, clue]);
  };

  const removeClues = (clue) => {
    setChosenClues((prevClues) => prevClues.filter((c) => c !== clue));
  };

  const clues = { chosenClues, addClues, removeClues };

  return <AuthContext.Provider value={clues}>{children}</AuthContext.Provider>;
}

function useChosenClues() {
  const clues = useContext(AuthContext);
  return clues;
}

export { CluesProvider, useChosenClues };
