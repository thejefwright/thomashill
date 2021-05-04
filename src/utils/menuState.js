import React, { useState, createContext, useContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  function openMenu() {
    setMenuOpen(true);
  }
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <LocalStateProvider
      value={{ menuOpen, setMenuOpen, toggleMenu, openMenu, closeMenu }}
    >
      {children}
    </LocalStateProvider>
  );
}

export function useMenu() {
  const all = useContext(LocalStateContext);
  return all;
}

export default MenuStateProvider;
