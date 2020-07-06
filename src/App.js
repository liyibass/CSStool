import React, { useEffect } from "react";
import { EventHandler } from "./scripts/EventHandler";
import Homepage from "./pages/homepage/homepage.component";
import "./styles/base/overall.scss";

function App() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
