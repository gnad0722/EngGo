import axios from "axios";
import React, { useState } from "react";

function FormVocabulary(props) {
  const [vocabulary, setVocabulary] = useState("");
  const [example, setExample] = useState("");
  const [hidden, setHidden] = useState("none");
  const [content, setContent] = useState("");
  function handleChange(e) {
    if (e.target.name === "vocabulary") {
      setVocabulary(e.target.value);
    } else if (e.target.name === "example") {
      setExample(e.target.value);
    }
  }
  async function handleClick() {
    const userData = props.userData;
    if (vocabulary === "" || example === "") {
      setContent("*Vocabulary and Example must not be empty.");
      setHidden("");
    } else {
      const response = await axios.post(
        `http://localhost:4000/login/${userData.id}`,
        {
          vocabulary: vocabulary,
          example: example,
        }
      );
      const state = response.data;
      if (!state.success) {
        setHidden("");
        setContent("*Vocabulary already exists.");
      } else {
        const result = await axios.get(
          `http://localhost:4000/login/${userData.id}`
        );
        props.onAdd(result.data.listVocab);
      }
    }
  }
  return (
    <div>
      <ul>
        <li>
          <input
            className="form-control form-example"
            name="vocabulary"
            value={vocabulary}
            type="text"
            placeholder="Vocabulary"
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            className="form-control form-example"
            name="example"
            value={example}
            type="text"
            placeholder="Example"
            onChange={handleChange}
          />
        </li>
      </ul>
      <p className="ps-3" style={{ color: "#b3261e", display: hidden }}>
        {content}
      </p>
      <div className="d-flex flex-row-reverse mt-4">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClick}
        >
          Add vocabulary
        </button>
      </div>
    </div>
  );
}
export default FormVocabulary;
