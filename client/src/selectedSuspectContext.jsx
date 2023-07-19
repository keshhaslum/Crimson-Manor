import React, { useContext } from 'react';
import { useState } from 'react';

const Context = React.createContext();

function SelectedSuspectProvider({ children }) {
  const [chosenSuspect, setChosenSuspect] = useState(null);

  const chooseSuspect = (suspect) => {
    setChosenSuspect(suspect);
  };

  const suspect = { chosenSuspect, chooseSuspect };
  console.log(suspect); // This logs the correct object

  return <Context.Provider value={suspect}>{children}</Context.Provider>;
}

function useChosenSuspect() {
  const suspect = useContext(Context);
  return suspect;
}

export { SelectedSuspectProvider, useChosenSuspect };
