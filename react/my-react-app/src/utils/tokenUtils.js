import {jwtDecode} from "jwt-decode";

export function verifyAndDecodeToken(token) {
  try {
    // Decode the token using the library
    const decoded = jwtDecode(token);

    console.log("Decoded Token:", decoded);

    // Check if the token has expired
    if (decoded.exp) {
      const currentTime = Math.floor(Date.now() / 1000); // seconds
      if (decoded.exp < currentTime) {
        console.error("Token expired!");
        return { valid: false, reason: "expired", decoded: null };
      }
    }

    console.log("Token is valid.");
    return { valid: true, decoded };
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return { valid: false, reason: "invalid", decoded: null };
  }
}
