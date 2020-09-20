import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import AddTopic from "./components/AddTopic";
import StyledApp from "./StyledApp";

function App() {
  return (
    <>
      <StyledApp />
      <Header title="Forum" />
      <div className="container">
        <AddTopic
          gridCol="2 / 3"
          gridRow="1 / 2"
          placeholder="Add Topic"
        ></AddTopic>
        <Container
          title="Topics"
          gridCol="2 / 3"
          gridRow="2/ 3"
          content="CONTENT"
        />
        <Container
          title="Popular"
          content="CONTENT"
          gridCol="3 / 4"
          gridRow="1"
        />
      </div>
    </>
  );
}

export default App;
