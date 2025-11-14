import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, submitForm, clearForm } from "../features/formSlice";
import FormComponent from "./FormComponent";
import Child from "./Child";
import SubscribeChild from "./SubscribeChild";

export default function FormContainer() {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
    alert(`Form submitted successfully!`);
  };

  const handleClear = () => {
    dispatch(clearForm());
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* <h2>Form Component</h2> */}
      <FormComponent
        formData={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
      />
      <Child data={form.submittedData} />
      <SubscribeChild />
    </div>
  );
}
