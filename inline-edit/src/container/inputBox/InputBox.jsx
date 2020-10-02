import React, { useState } from "react";
import { Container } from "./InputBox.styles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const InputBox = () => {
  const [keyword, setKeyword] = useState("");
  const [apiResult, setApiResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [
    showInputField,
    setShowInputField,
  ] = useState(true);

  const validatedApi = (value) => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (keyword.length < 10) {
          resolve("Success");
        }
        if (keyword.length > 10) {
          reject("Error");
        }
      }, 3000);
    });
  };

  const onSubmit = async (event) => {
    try {
      const apiResponse = await validatedApi();
      if (apiResponse === "Success") {
        setLoading(false);
        setApiResult(true);
        setShowInputField(false);
      }
    } catch (err) {
      setLoading(false);
      setApiResult(false);
      setShowInputField(false);
    }
  };

  const icon = (icon, spin) => {
    return (
      <FontAwesomeIcon
        className="faIcon"
        icon={icon}
        spin={spin}
      />
    );
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
          onBlur={() => {
            onSubmit();
          }}
        />
      ) : null}
      {loading ? (
        icon(faSpinner, true)
      ) : apiResult ? (
        <p>
          {keyword}
          {icon(faCheck, false)}
        </p>
      ) : (
        <p>
          Something went wrong
          {icon(faTimes, false)}
        </p>
      )}
    </Container>
  );
};

export default InputBox;
