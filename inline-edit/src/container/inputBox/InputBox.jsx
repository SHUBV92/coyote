import React, { useState } from "react";
import { Container } from "./InputBox.styles.jsx"

const InputBox = () => {
  const [keyword, setKeyword] = useState("");
  const [
    showInputField,
    setShowInputField,
  ] = useState(true);
  const [apiResult, setApiResult] = useState("");

  const validatedApi = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (keyword.length < 10) {
          resolve(value);
        }
        if (keyword.length > 10) {
          reject("Error");
        }
      }, 3000);
    });
  };

  const onSubmit = async (event) => {
   event.preventDefault()
    // setLoading(true);

    try {
      const apiResponse = await validatedApi();
      if (apiResponse === "Success") {
        //   setLoading(false);
        setApiResult(true);
        setShowInputField(false);
      }
    } catch (err) {
    //   setLoading(false);
      setApiResult(false);
      setShowInputField(false);
    }
  };

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
