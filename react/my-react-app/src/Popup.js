import React from "react";
import './App.css';
export default function Popup(props){
    return (
        <div className="popup-overlay">
            <div className="popup-content">
            <h3>Custom Popup</h3>
            <h2 className="redH1">Hello from the popup#: {props.number}</h2>
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>
    );
}