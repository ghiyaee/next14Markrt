'use client'
import { createContext, useReducer } from 'react';
const ContextStore = createContext();
const initailState = {
  userConnect: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'USERLOGIN':
      const user = action.payload;
      return {
        ...state,
        userConnect: [...state.userConnect, user],
      };
  }
};
const ContextStorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);
  return (
    <ContextStore.Provider value={{ state, dispatch }}>
     {children}
    </ContextStore.Provider>
  );
};

export  { ContextStore,ContextStorProvider }
