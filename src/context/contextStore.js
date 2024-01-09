'use client';
import { createContext, useReducer } from 'react';
const ContextStore = createContext();
const initailState = {
  userConnect: [],
  cartItem: [],
  counter:0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'USERLOGIN':
      const user = action.payload;
      return {
        ...state,
        userConnect: [...state.userConnect, user],
      };
    case 'ADDITEM':
      const item = action.payload;
        return {
        ...state,
        cartItem: [...state.cartItem,item],
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

export { ContextStore, ContextStorProvider };


