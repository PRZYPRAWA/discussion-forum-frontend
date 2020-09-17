import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header title="Forum" />
      <div className="container">
        <Container title="Topics" content="ELO" flex="0.5 1 auto" />

        <Container title="Popular" content="POPULARNE" flex="0.3 1 auto" />
      </div>
    </>
  );
}

export default App;
