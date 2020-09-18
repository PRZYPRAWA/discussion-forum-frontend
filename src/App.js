import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import AddTopic from "./components/AddTopic";
import styled from "styled-components";

const StyledApp = styled.div`
  :root {
    --containerHeaderHeight: 50px;
  }

  body {
    background: rgba(191, 191, 191, 0.35);
    font-family: "Lato", Helvetica, sans-serif;
  }

  .container {
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    height: 500px;
  }

  .container-small {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    justify-content: flex-start;
  }
`;

function App() {
  return (
    <StyledApp>
      <Header title="Forum" />
      <div className="container">
        <div className="container-small ">
          <AddTopic placeholder="Add Topic"></AddTopic>
          <Container title="Topics" content="CONTENT" minWidth="500px" />
        </div>
        <div className="container-small ">
          <Container title="Popular" content="CONTENT" minWidth="400px" />
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
