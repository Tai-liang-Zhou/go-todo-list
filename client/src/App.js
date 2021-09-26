import React from "react";
import "./App.css";
// import the Container Component from the semantic-ui-react
import { Container } from "semantic-ui-react";
// import the ToDoList component
import ToDoList from "./To-Do-List";
import LotTable from "./LotTable";
function App() {
  return (
    <div>
      <Container>
        <ToDoList />
      </Container>
      <br></br>
      <Container>
        <LotTable />
      </Container>
    </div>
  );
}
export default App;
