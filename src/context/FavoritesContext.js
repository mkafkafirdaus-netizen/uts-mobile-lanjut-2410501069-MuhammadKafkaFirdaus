import React, { createContext, useReducer } from "react";

export const FavoritesContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      return state.filter(item => item.idMeal !== action.payload);

    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(reducer, []);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};