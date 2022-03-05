import React, { createContext, useState } from 'react';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { AuthProvider } from "./auth/reducer";

export const ActiveContext = createContext();

function ActiveProvider({ children }) {
  const [active, setActive] = useState(1);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
}

render(
  <BrowserRouter>
    <AuthProvider>
      <ActiveProvider>
        <App />
      </ActiveProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);