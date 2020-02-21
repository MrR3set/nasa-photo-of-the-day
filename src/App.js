import React from "react";
import "./App.css";
import CardPage from "./components/CardPage"
import Jumbotron from "./components/Jumbotron";

// import Header from "./components/Header"
function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Jumbotron/>
        <CardPage/>  
    </div>
  );
}

export default App;
