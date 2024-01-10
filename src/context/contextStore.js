'use client';
import { createContext, useReducer } from 'react';
const ContextStore = createContext();
const initailState = {
  userConnect: [],
  cartItem: [],
  counter: 0,
  localData: [],
  message:''
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
        cartItem: [...state.cartItem, item],
      };
    case 'ADDCOUNTER':
      const addNumder = action.payload;
      return {
        ...state,
        counter: state.counter + addNumder,
      };
    case 'DECCOUNTER':
      const decNumder = action.payload;
      return {
        ...state,
        counter: state.counter - decNumder,
      };
    case 'PRODUCTLOCAL':
      const local = action.payload;
      return {
        ...state,
        localData: [...state.localData, local],
      };
    case 'DELETEPRODUCT':
      const productItem = action.payload;
      const product = state.cartItem.filter(
        (item) => item._id !== productItem._id
      );
      return {
        ...state,
        cartItem: product,
      };
    case 'MESSAGEBUY':
      const message = action.payload
      return {
        ...state,message:message
      }
    default:
      return state;
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
