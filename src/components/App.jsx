import React from "react";
import Reactdom from "react-dom";
import emojipedia from "../emojipedia";
import Entry, { createEntry } from "./Entry";
import Intro from "./Intro";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <Intro />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
