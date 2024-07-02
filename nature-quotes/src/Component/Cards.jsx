import React from "react";

export default function Cards(props) {
  return (
    <div className="box">
      <div className="card">
        <div className="card-header">
          <img src= {props.img} alt="This is tree" />
        </div>
        <div className="card-content">
          <p>
           {props.text}
          </p>
          <strong style={{color: "black"}}>{props.author}</strong>
        </div>
      </div>
    </div>
  );
}