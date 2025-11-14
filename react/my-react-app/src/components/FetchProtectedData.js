import React, { useEffect, useState } from "react";

export default function FetchProtectedData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Retrieved token:", token);
    const b = 'Bearer ' + token;

    const fetchProtectedData = async () => {
      try {
        const response = await fetch("https://localhost:7248/api/Account/View", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Authorization": b,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        console.log("Protected Data:", result);
      } catch (err) {
        setError(`Fetch error: ${err.message}`);
        console.error("FetchProtectedData Error:", err);
      }
    };

    if (token) {
      fetchProtectedData();
    } else {
      setError("No token found. Please login first.");
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Protected API Data</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <pre style={{ textAlign: "left", display: "inline-block" }}>
        {JSON.stringify(data, null, 2)}
      </pre>}
    </div>
  );
}
