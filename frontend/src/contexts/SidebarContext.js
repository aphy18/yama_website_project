import React, { useState, useContext, createContext } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  //sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false)
  }

  // exporting state and function without passing dsown a tree
  return <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
    {children}
    </SidebarContext.Provider>;
};

export default SidebarProvider;
