import React from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import AddTopic from "./components/AddTopic";

function App() {
  return (
    <>
      <Header title="Forum" />
      <div className="container">
        <AddTopic placeholder="Add Topic"></AddTopic>

        <Container
          title="Topics"
          content="CONTENT"
          minWidth="400px"
          gridCol="2 / 3"
          gridRow="2 /"
        />

        <Container
          title="Popular"
          content="CONTENT"
          gridCol="3 / 4"
          gridRow="1 / 3"
        />
      </div>
    </>
  );
}

export default App;
