import { createContext } from "react";

export const Preferences = createContext();

export function prefReducer(state, action) {
  switch (action.type) {
    case "darkMode":
      return { darkMode: action.value };
      break;

    default:
      return state;
      break;
  }
}

export let prefDefault = {
  darkMode: false,
};
