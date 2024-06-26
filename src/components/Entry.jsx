import React from "react";
import Reactdom from "react-dom";

function createEntry(item) {
  return (
    <Entry
      key={item.id}
      emoji={item.emoji}
      word={item.name}
      definition={item.meaning}
    />
  );
}

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.term}>
          {props.emoji}
        </span>
        <span>{props.word}</span>
      </dt>
      <dd>{props.definition}</dd>
    </div>
  );
}

export default Entry;
export { createEntry };
