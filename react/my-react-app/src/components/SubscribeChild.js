import React from "react";
import { useSelector } from "react-redux";
import "./Form.css";

export default function SubscribeChild() {
  const data = useSelector((state) => state.form.submittedData);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Submitted Data(Subscribed to Redux):</h3>
      {data ? (
        <pre
          style={{
            textAlign: "left",
            display: "inline-block",
            background: "#f4f4f4",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
            Current Data:{" "}
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
}
