import React, { useState } from "react";
import { Container } from "./InputBox.styles.jsx"

const InputBox = () => {
  const [keyword, setKeyword] = useState("");
  const [
    showInputField,
    setShowInputField,
  ] = useState(true);

  return (
    <Container
      onClick={() => {
        setShowInputField(true);
      }}
    >
      {showInputField ? (
        <input
          type="text"
          placeholder="Hello World"
          value={keyword}
          onChange={(event) => {
            setKeyword(event.target.value);
          }}
        />
      ) : null}
    </Container>
  );
};

export default InputBox;
