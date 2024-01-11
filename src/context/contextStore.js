'use client';
import { createContext, useReducer } from 'react';
const ContextStore = createContext();
const initailState = {
  userConnect: [],
  cartItem: [],
  localData: [],
  message: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'USERLOGIN':
      const user = action.payload;
      return {
        ...state,
        userConnect: [...state.userConnect, user],
      };
    case 'USERLOGOUT':
      const userLogOut = action.payload;
      return {
        ...state,
        userConnect:[...state.userConnect,userLogOut]
      }
    case 'ADDITEM':
      const item = action.payload;
      return {
        ...state,
        cartItem: [...state.cartItem, { ...item, quantity: 1 }],
      };
    case 'INCREMENT_QUANTITY':
      const productAdd = action.payload;
      const result = state.cartItem.find((p) => p._id === productAdd._id);
      if (result) {
        return {
          ...state,
          cartItem: [
            ...state.cartItem.map((item) =>
              item._id === productAdd._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          ],
        };
      }
    case 'DECRIMENT_QUANTITY':
      const product = action.payload;
      const results = state.cartItem.find((p) => p._id === product._id);
      if (results) {
        return {
          ...state,
          cartItem: [
            ...state.cartItem.map((item) =>
              item._id === product._id
                ? {
                    ...item,
                    quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                  }
                : item
            ),
          ],
        };
      }

   
    case 'PRODUCTLOCAL':
      const local = action.payload;
      return {
        ...state,
        localData: [...state.localData, local],
      };
    case 'DELETEPRODUCT':
      const productItem = action.payload;
      const products = state.cartItem.filter(
        (item) => item._id !== productItem._id
      );
      return {
        ...state,
        cartItem: products,
      };
    case 'MESSAGEBUY':
      const message = action.payload;
      return {
        ...state,
        message: message,
      };
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
