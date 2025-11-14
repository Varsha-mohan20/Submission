import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import App from "./App";
import  store  from "./store";
// import Header, {ProfessionList } from './Welcome';
// import {ProfessionList, TimeColorApp } from './Welcome';
// import FormComponent from './FormComponent';
// import {FormComponents} from './FormComponent';
import reportWebVitals from './reportWebVitals';
// import { persons } from "./data";

// import ExampleToDoList from './ExampleToDoList';
// import {Welcome}  from './ExampleToDoList';

// const user1 = { name: "Varsha", id: "101" };
// const user2 = { name: "Priya", id: "102" };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      {/* <div style={{ textAlign: "center", marginTop: "40px" }}> */}
      <div>
        <App />
      </div>
    </Provider>
    {/* <App /> */}
    {/* <Welcome {...user1} />
    <Welcome {...user2} /> */}
    {/* <Welcome name="Varsha" id="101"/> */}
    {/* <FIX_ERROR01/> */}
    {/* <TimeColorApp />
    <ProfessionList list={persons}/> */}
    {/* <ExampleToDoList/> */}
    {/* <Header/> */}
    {/* <FormComponents buttonLabel="Send"/>
    <FormComponents/> */}
  </React.StrictMode>
);

const test = ReactDOM.createRoot(document.getElementById('test'));
test.render(
  <React.StrictMode>
  {/* <FormComponents/> */}
    {/* <App /> */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
