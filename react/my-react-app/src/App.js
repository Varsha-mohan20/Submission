// import logo from './logo.svg';
// import React, {useState} from "react";
import './App.css';
// import Popup from "./Popup";
// import Parent from "./Parent";
// import TimeColorApp from "./TimeColorApp";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import FormContainer from "./components/FormContainer";
import About, { NotFound, Home} from "./components/About";
import FetchData from "./components/ApiData";
import FetchProtectedData from "./components/FetchProtectedData"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error] = useState("");

  // Check token on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // Just dummy logout for now
  const handleLogout = () => {
    // localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    // Normally you'd validate token from backend here
    // localStorage.setItem("token", "sampleToken123");
    setIsLoggedIn(true);
  };
  return (
    <Router>
    <nav style={{ margin: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
    <div>
          {isLoggedIn && (
            <>
              <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
              <span> || </span>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
              <span> || </span>
              <NavLink to="/form" className={({ isActive }) => (isActive ? "active" : "")}>
                Form
              </NavLink>
              <span> || </span>
              <NavLink to="/api" className={({ isActive }) => (isActive ? "active" : "")}>
                Api
              </NavLink>
            </>
          )}
        </div>

        {/* Right side login/logout buttons */}
        <div>
          {!isLoggedIn ? (
            <NavLink to="/login" onClick={handleLogin} className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        ) : (
          <NavLink to="/logout" onClick={handleLogout} className={({ isActive }) => (isActive ? "active" : "")}>
            Logout
          </NavLink>
          )}
        </div>
    </nav>
    {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
    <Routes>
      {/* <Route path="/" element={<Navigate to="/about" />} /> */}
      <Route path="/" element={<FormContainer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<FormContainer />} />
      <Route path="/login" element={<Home />} />
      <Route path="/logout" element={<FormContainer />} />
      <Route path="/api" element={<><FetchData email="varsha@gmail.com" password="Varsha@1234" /> <FetchProtectedData /></>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
    // <FormContainer />
  );
}

export default App;
// function App() {
//   // const [showPopup, setShowPopup] = useState(false);
//   // const [showPopup2, setShowPopup2] = useState(false);
//   const [activePopup ,setActivePopup] = useState(null);

//   // Form states
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     color: "#000000",
//   });
//   const [submittedData, setSubmittedData] = useState(null);

//   // Handle form input change
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(`Submitted:
//     Username: ${formData.username}
//     Email: ${formData.email}
//     Password: ${formData.password}
//     Color: ${formData.color}`);
//     setSubmittedData(formData);
//   }

//   // Handle clear button
//   function handleClear() {
//     setFormData({ username: "", email: "", password: "", color: "#000000", });
//     setSubmittedData(null);
//   }

//   var props = {className:"redH1"};

//   const styleProps = {
//     style:{
//       marginLeft:"10px",
//       color:"#000099",
//       padding:"10px",
//       // border:"1px solid gray",
//       maxWidth:"20vx"
//     }
//   };
//   const styleProps2 = {
//     style:{
//       marginLeft:"10px",
//       color:"green",
//       padding:"10px",
//       // border:"1px solid gray",
//       maxWidth:"20vx"
//     }
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <div className="grid-container">
//       <div className="grid-item">
//       <h1 {...props}>Hello world</h1>
//       </div>
//       <div className="grid-item" >
//         <div {...styleProps}>
//       <button onClick={() => setActivePopup("1")}>Open Popup 1</button>
//       {activePopup === "1" && (
//           <Popup number={1} onClose={() => setActivePopup(null)} />
//         )}
//       </div>
//       <div {...styleProps2}>
//       <button onClick={() => setActivePopup("2")}>Open Popup 2</button>
//             {activePopup === "2" && (
//                 <Popup number={2} onClose={() => setActivePopup(null)} />
//               )}
//         </div>
//       </div>
//       <div className="grid-item" {...styleProps2}>
//         <Parent />
//       </div>
//       <div className="grid-item">
//           <h2>Form</h2>
//           <form onSubmit={handleSubmit} style={{ textAlign: "left", display: "inline-block" }}>
//             <label htmlFor="username">Username:</label><br />
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter username"
//               value={formData.username}
//               onChange={handleChange}
//             />
//             <br /><br />

//             <label htmlFor="email">Email:</label><br />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <br /><br />

//             <label htmlFor="password">Password:</label><br />
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <br /><br />

//             <label htmlFor="color">Choose a color:</label><br />
//             <input
//              key={formData.color}
//               type="color"
//               id="color"
//               name="color"
//               value={formData.color}
//               onChange={handleChange}
//               style={{
//                 width: "100px",
//                 // height: "40px",
//                 cursor: "pointer",
//                 border: "none",
//                 background: "transparent",
//               }}
//             />
//               <p style={{ marginTop: "8px" }}>
//                 Selected color:{" "}
//                 <span style={{ color: formData.color }}>{formData.color}</span>
//               </p>
//             <br /><br />
      
//             <button type="submit">Submit</button>
//             <button
//               type="button"
//               onClick={handleClear}
//               style={{ marginLeft: "10px" }}
//             >
//               Clear
//             </button>
//           </form>
         
//         </div>
//       <div className="grid-item wide" style={{ textAlign: "center" }}>
//       {/* <h3 style={{ marginTop: "15px" }}>
//             Your form submission data is:{" "}
//             {submittedData
//               ? `${submittedData.username}, ${submittedData.email}, ${submittedData.password}`
//               : "No data yet"}
//           </h3>         */}
//           <h3 style={{ marginTop: "15px" }}>
//             Your form submission data is:{" "}
//             {submittedData
//               ? JSON.stringify(submittedData, null, 2)
//               : "No data yet"}
//           </h3>
//           <br/>
//           <TimeColorApp />
//           </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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