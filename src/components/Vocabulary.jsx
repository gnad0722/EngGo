import React, { useState } from "react";
import ButtonEye from "./ButtonEye";
import ButtonEyeSlash from "./ButtonEyeSlash";
function Vocabulary(props) {
  const [example, setExample] = useState("");
  const [show, setShow] = useState(false);
  function handleShow(name) {
    if ( name === "eye") {
      setExample(props.example);
      setShow(!show);
    } else if (name==="eyeSlash") {
      setShow(!show);
      setExample("");
    }
  }
  function handleChange(e) {
    setExample(e.target.value);
  }
  return (
    <div>
      <li>{props.vocabulary}</li>

      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control form-example"
          placeholder="Example"
          value={example}
          onChange={handleChange}
        />
       <ButtonEye name="eye" show={show} onShow={handleShow}/>
       <ButtonEyeSlash name="eyeSlash" show={show} onShow={handleShow}/>
      
      </div>
    </div>
  );
}
export default Vocabulary;
