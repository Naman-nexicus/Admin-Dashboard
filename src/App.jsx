

import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Dashboard onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
