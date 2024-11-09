import React from "react";
import ReactDOM from "react-dom/client";
import 'flowbite'
import "./index.css";
import App from "./App";
import { Flowbite } from "flowbite-react";
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
      <Flowbite>
        <App />
      </Flowbite>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import LogIn from "./pages/SSO/Login/login";

// ReactDOM.render(
//   <React.StrictMode>
//     <LogIn />
//   </React.StrictMode>,
//   document.getElementById("root")
// );