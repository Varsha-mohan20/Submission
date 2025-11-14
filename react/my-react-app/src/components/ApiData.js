import { useEffect } from "react";
// import { verifyAndDecodeToken } from "../utils/tokenUtils";

export default function FetchData({ email, password }) {
  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const response = await fetch("https://localhost:7248/api/Auth/login", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        console.log("Login API Response:", result);

        //Suppose your API returns a JWT token in result.token
        const token = result.token;
        
        if (token) {
            // const verification = verifyAndDecodeToken(token);
            // console.log("Token Verification Result:", verification);
            localStorage.setItem("token", token);
        } else {
          console.warn("No token received in response.");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };

    fetchLogin();
  }, [email, password]);

  return null;
}
