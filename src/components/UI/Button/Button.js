import React from "react";
import './Button.css'

export default function Button(props) {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
