/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const PersonaContext = createContext();

export const PersonaProvider = ({ children }) => {
  const [persona, setPersona] = useState('developer'); // 'developer' | 'freelancer'

  const togglePersona = (selected) => {
    setPersona(selected);
  };

  return (
    <PersonaContext.Provider value={{ persona, togglePersona }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => useContext(PersonaContext);
