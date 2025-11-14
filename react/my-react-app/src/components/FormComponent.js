import React from "react";
import "./Form.css";
export default function FormComponent({
  formData,
  onChange,
  onSubmit,
  onClear,
}) {
  return (
    <div className="form-container">
      <h1>React Redux Form</h1>
      <h2>Login Form</h2>
    <form onSubmit={onSubmit} style={{ textAlign: "left", display: "inline-block" }}>
      <label htmlFor="username">Username:</label><br />
      <input
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={onChange}
        placeholder="Enter username"
      />
      <br /><br />

      <label htmlFor="email">Email:</label><br />
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Enter email"
      />
      <br /><br />

      <label htmlFor="password">Password:</label><br />
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Enter password"
      />
      <br /><br />

      {/* <label htmlFor="color">Choose a color:</label><br />
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={onChange}
        style={{
          width: "190px",
          height: "35px",
          cursor: "pointer",
          border: "none",
          background: "transparent",
        }}
      />
      <p style={{ marginTop: "8px" }}>
        Selected color:{" "}
        <span style={{ color: formData.color }}>{formData.color}</span>
      </p> */}
      <div style={{ position: "relative", left:"35px" }}>
      <button type="submit">Submit</button>
      <button type="button" onClick={onClear} style={{ marginLeft: "10px" }}>
        Clear
      </button>
      </div>
    </form>
    </div>
  );
}
