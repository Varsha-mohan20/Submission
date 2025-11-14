import React from "react";
import { useNavigate, useLocation, useParams  } from "react-router-dom";

export const Home = () => {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Home Page</h2>
      </div>
    );
  };

const About = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>About Me</h2>
      <p>Hello! I'm Varsha, and this is the About page created using React Router.</p>
    </div>
  );
};

export const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  console.log("Location Path: ",location.pathname);
  console.log("Search Params:", location.search);
  console.log("Hash:", location.hash);
  console.log("Route Params:", params);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ⬅ Go Back Home
      </button>
    </div>
  );
};


export function LocationDemo() {
  const location = useLocation();

  return (
    <div>
      <h2>Current Location Info</h2>
      <p><b>Pathname:</b> {location.pathname}</p>
      <p><b>Search Params:</b> {location.search}</p>
      <p><b>Hash:</b> {location.hash}</p>
    </div>
  );
}


export default About;
