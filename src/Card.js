import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="Card-Container">
        <img className alt="Abc" src={props.img} />
        <h3 className="Card-Title">{props.title}</h3>
        <h3 className="Card-System">{props.system}</h3>
      </div>
    </div>
  );
}
