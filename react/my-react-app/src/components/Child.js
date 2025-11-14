import React from "react";
import { useSelector } from "react-redux";
import "./Form.css";

export default function Child() {
    const { username, email, password } = useSelector((state) => state.form);
  
    // Filter out empty fields
    const nonEmptyFields = Object.fromEntries(
      Object.entries({ username, email, password }).filter(([_, v]) => v.trim() !== "")
    );
  
    return (
      <div className="child-container">
        <h3>Submitted Data(Read-only View):</h3>
        {Object.keys(nonEmptyFields).length > 0 ? (
          <pre
            style={{
              textAlign: "left",
              background: "#f4f4f4",
              padding: "10px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            Current Data:{" "}
            {JSON.stringify(nonEmptyFields, null, 2)}
          </pre>
        ) : (
          <p>No live data yet.</p>
        )}
      </div>
    );
  }
// export default function Child({ data }) {
//   return (
//     <div style={{ marginTop: "20px" }}>
//       <h3>Submitted Data(Read-only View):</h3>
//       {data ? (
//         <pre
//           style={{
//             textAlign: "left",
//             display: "inline-block",
//             background: "#f4f4f4",
//             padding: "10px",
//             borderRadius: "8px",
//           }}
//         >
//           {JSON.stringify(data, null, 2)}
//         </pre>
//       ) : (
//         <p>Waiting for submission...</p>
//       )}
//     </div>
//   );
// }
