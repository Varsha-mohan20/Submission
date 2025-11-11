import React from "react";
function FormComponent({ children }) {
    return <form>{children}</form>;
}

FormComponent.InputName = function InputName() {
    return <input type="text" placeholder="Name" />;
};

FormComponent.InputPlace = function InputPlace() {
    return <input type="text" placeholder="Place" />;
};

FormComponent.Button = function Button() {
    return <button type="submit">Submit</button>;
};

export function FormComponents(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                // height: "100vh"
            }}
        >
            <form style={{
                // display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "20px",
                // border: "1px solid #ccc",
                borderRadius: "10px",
                backgroundColor: "#f9f9f9"
            }}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Place" />
                {/* <button type="submit">{props.buttonLabel || "Submit"}</button> */}
                <button type="submit">{props.buttonLabel == null ? "Submit" : props.buttonLabel}</button>
            </form>
        </div>
    );
}

export default function App() {
    return (
        <FormComponent>
            <FormComponent.InputName />
            <FormComponent.InputPlace />
            <FormComponent.Button />
        </FormComponent>
    );
}
