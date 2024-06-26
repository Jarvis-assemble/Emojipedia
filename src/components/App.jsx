import React from "react";
import Reactdom from "react-dom";
import emojipedia from "../emojipedia";
import Entry, { createEntry } from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
