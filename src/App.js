import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default App;
