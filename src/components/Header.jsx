import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  function handleClick(event) {
    const nameButton = event.target.name;
    if (nameButton === "Login") {
      navigate("/login");
    } else if (nameButton === "Register") {
      navigate("/register");
    }
  }
  return (
    <header className="d-flex ">
      <h1>EngGo</h1>
      <div className="row justify-content-between align-self-center ms-auto ">
        <div className="col-5">
          <button
            type="button"
            className="btn btn-dark "
            style={{ fontFamily: "McLaren" }}
            name="Login"
            onClick={handleClick}
          >
            Login
          </button>
        </div>

        <div className="col-7">
          <button
            type="button"
            className="btn btn-light "
            style={{ fontFamily: "McLaren" }}
            name="Register"
            onClick={handleClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
