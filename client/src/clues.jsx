import React, { useContext } from 'react';
import { useState } from 'react';

const AuthContext = React.createContext();

function CluesProvider({ children }) {
  const [chosenClues, setChosenClues] = useState([]);

  const updateClues = (clue) => {
    setChosenClues(clue);
  };

  const clues = { chosenClues, updateClues };

  return <AuthContext.Provider value={clues}>{children}</AuthContext.Provider>;
}

function useChosenClues() {
  const clues = useContext(AuthContext);
  return clues;
}

export { CluesProvider, useChosenClues };
