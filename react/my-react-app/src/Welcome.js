import React, { useState, useEffect } from "react";
// import { persons } from "./data";
import './App.css';

function Header() {
  return (
    <div className="Header">
      <div class="card">
            <h1>Welcome to My Page</h1>
            <p>This is a quick preview layout using HTML and CSS.</p>
        </div>
    </div>
  );
}
export default Header;

export function TimeButton({ color }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <button
      onClick={() => setTime(new Date().toLocaleTimeString())}
      style={{color: color, border: "1px solid " + color, padding: "10px 20px", borderRadius: "8px", cursor: "pointer"}}
    >
      {time}
    </button>
  );
}

export function ColorSelector({ selectedColor, onChange }) {
  return (
    <select
      value={selectedColor}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginTop: "15px", padding: "5px" }}
    >
      <option value="black">Black</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="purple">Purple</option>
    </select>
  );
}

export function TimeColorApp() {
  const [color, setColor] = useState("black");

  return (
    <div style={{ margin: "10px" }}>
      <TimeButton color={color} />
      <br />
      <ColorSelector selectedColor={color} onChange={setColor} />
    </div>
  );
}

// var person = [{name:"Varsha",profession:"IT"},{name:"Priya",profession:"Dental Care"},{name:"Nisha",profession:"IT"}]
// person.filter((x) => x.profession === "IT")

const baseUrl = "https://i.imgur.com";

export function ProfessionList(props) {
  const list = props.list;

  // Filter IT and Non-IT
  const itPeople = list.filter((p) => p.profession === "IT");
  const nonItPeople = list.filter((p) => p.profession !== "IT");

  const renderList = (people, title) => (
    <div style={{ marginBottom: "20px" }}>
      <h2>
        {title} ({people.length})
      </h2>

      {people.length === 0 ? (
        <p style={{ color: "gray", marginLeft: "10px" }}>No data found</p>
      ) : (
        people.map((person) => (
          <div
            key={person.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={baseUrl + "/" + person.imageId + person.imageSize + ".jpg"}
              alt={person.name}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <p style={{ margin: 0 }}>
              <strong>{person.name}</strong> — {person.profession} &nbsp;
              <span style={{ color: "gray" }}>
                Known for: {person.knownFor}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {renderList(itPeople, "IT Professionals")}
      {renderList(nonItPeople, "Non-IT Professionals")}
    </div>
  );
}