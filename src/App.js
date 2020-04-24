import React from "react";
import "./App.css";
import ConnectionsCards from "./hooks/ConnectionsCards";

function App() {
  return (
    <div className="h-screen w-full bg-blue-500">
      <div>
        <ConnectionsCards></ConnectionsCards>
      </div>
    </div>
  );
}

export default App;
