import React from "react";
import './App.css';
import Posts from "./Components/Posts";
import Navbar from "./Components/BlogNav";

function App() {
  return (
    <div className="App">
      <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <Navbar />
            <Posts />
        </div>
    </div>
  );
}

export default App;
