import React from "react";
import "./App.css";
import { StoreProvider } from "./context";
import { Dashboard } from "./screens/Dashboard/Dashboard";

function App() {
  return (
    <StoreProvider>
      <Dashboard />
    </StoreProvider>
  );
}

export default App;
