import React, { useContext } from 'react';
import { useState } from 'react';

const Context = React.createContext();

function SelectedCluesProvider({ children }) {
  const [chosenClues, setChosenClues] = useState([]);

  const addClues = (clue) => {
    if (chosenClues.length >= 3) {
      return;
    }
    setChosenClues((prevClues) => [...prevClues, clue]);
  };

  const removeClues = (clue) => {
    setChosenClues((prevClues) => prevClues.filter((c) => c !== clue));
  };

  const resetClues = () => {
    setChosenClues([]);
  };

  const clues = { chosenClues, addClues, removeClues, resetClues };

  return <Context.Provider value={clues}>{children}</Context.Provider>;
}

function useChosenClues() {
  const clues = useContext(Context);
  return clues;
}

export { SelectedCluesProvider, useChosenClues };
