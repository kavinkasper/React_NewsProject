import { Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./News";
import React from "react";


function App() {
  return (
    <React.Fragment className="App">
      <Routes>
        <Route path="/" element={<News />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
