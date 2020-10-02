import React from "react";
import InputBox from "../container/inputBox/InputBox";
import { Container } from "./App.styles.js";

const App = () => {
  return (
    <Container>
      <h1>Coyote Input Box</h1>
      <InputBox />
    </Container>
  );
};

export default App;
