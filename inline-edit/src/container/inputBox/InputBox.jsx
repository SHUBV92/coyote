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
  const [apiResult, setApiResult] = useState(
    null
  );
  const [loading, setLoading] = useState(false);
  const [
    showInputField,
    setShowInputField,
  ] = useState(true);

  const validatedApi = (value) => {
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
    event.preventDefault();
    setLoading(true);

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
      <form onSubmit={(event) => onSubmit(event)}>
        {showInputField ? (
          <input
            type="text"
            placeholder="Enter keyword here ..."
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
            onBlur={(event) => {
              onSubmit(event);
            }}
          />
        ) : null}

        {loading ? (
          icon(faSpinner, true)
        ) : apiResult &&
          keyword.length != 0 &&
          !showInputField ? (
          <p>
            {keyword}
            {icon(faCheck, false)}
          </p>
        ) : !showInputField ? (
          <p>
            Something went wrong
            {icon(faTimes, false)}
          </p>
        ) : null}
      </form>
    </Container>
  );
};

export default InputBox;
