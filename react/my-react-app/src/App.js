import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Popup from "./Popup";
import Parent from "./Parent";
function App() {
  // const [showPopup, setShowPopup] = useState(false);
  // const [showPopup2, setShowPopup2] = useState(false);
  const [activePopup ,setActivePopup] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formData);
  }

  // Handle clear button
  function handleClear() {
    setFormData({ username: "", email: "", password: "" });
    setSubmittedData(null);
  }

  var props = {className:"redH1"};

  const styleProps = {
    style:{
      marginLeft:"10px",
      color:"#000099",
      padding:"10px",
      // border:"1px solid gray",
      maxWidth:"20vx"
    }
  };
  const styleProps2 = {
    style:{
      marginLeft:"10px",
      color:"green",
      padding:"10px",
      // border:"1px solid gray",
      maxWidth:"20vx"
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="grid-container">
      <div className="grid-item">
      <h1 {...props}>Hello world</h1>
      </div>
      <div className="grid-item" >
        <div {...styleProps}>
      <button onClick={() => setActivePopup("1")}>Open Popup 1</button>
      {activePopup === "1" && (
          <Popup number={1} onClose={() => setActivePopup(null)} />
        )}
      </div>
      <div {...styleProps2}>
      <button onClick={() => setActivePopup("2")}>Open Popup 2</button>
            {activePopup === "2" && (
                <Popup number={2} onClose={() => setActivePopup(null)} />
              )}
        </div>
      </div>
      <div className="grid-item" {...styleProps2}>
        <Parent />
      </div>
      <div className="grid-item">
          <h2>Form</h2>
          <form onSubmit={handleSubmit} style={{ textAlign: "left", display: "inline-block" }}>
            <label htmlFor="username">Username:</label><br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
            <br /><br />

            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            <br /><br />

            <label htmlFor="password">Password:</label><br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <br /><br />

            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={handleClear}
              style={{ marginLeft: "10px" }}
            >
              Clear
            </button>
          </form>
         
        </div>
      <div className="grid-item wide">
      {/* <h3 style={{ marginTop: "15px" }}>
            Your form submission data is:{" "}
            {submittedData
              ? `${submittedData.username}, ${submittedData.email}, ${submittedData.password}`
              : "No data yet"}
          </h3>         */}
          <h3 style={{ marginTop: "15px" }}>
            Your form submission data is:{" "}
            {submittedData
              ? JSON.stringify(submittedData, null, 2)
              : "No data yet"}
          </h3>
          </div>
      </div>
    </div>
  );
}

export default App;

// export function CustomPopup() {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="popup">
//       <button onClick={() => setShow(true)}>Open Popup</button>

//       {show && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <h3>Custom Popup</h3>
//             <p>Hello from the popup#: 1</p>
//             <button onClick={() => setShow(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }