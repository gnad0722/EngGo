import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function FormRegister() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState({
    email: "none",
    userName: "none",
    password: "none",
    fill: "none",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [userName, setUsername] = useState("");
  function handleChange(e) {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "userName":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPass":
        setConfirmPass(e.target.value);
        break;
      default:
        break;
    }
  }
  async function handleSignUp(e) {
    e.preventDefault();
    if (
      email === "" ||
      password === "" ||
      confirmPass === "" ||
      userName === ""
    ) {
      setHidden({
        email: "none",
        userName: "none",
        password: "none",
        fill: "",
      });
    } else if (password === confirmPass) {
      const response = await axios.post("http://localhost:4000/register", {
        email: email,
        password: password,
        userName: userName,
      });
      const result = response.data;
      if (result.success) {
        navigate("/dashboard/content", { state: result.user });
      } else {
        switch (result.typeError) {
          case "email":
            setHidden({
              email: "",
              userName: "none",
              password: "none",
              fill: "none",
            });
            break;
          case "userName":
            setHidden({
              email: "none",
              userName: "",
              password: "none",
              fill: "none",
            });
            break;
          default:
            setHidden({
              email: "",
              userName: "",
              password: "",
              fill: "none",
            });
            break;
        }
      }
    }
  }
  return (
    <div>
      <header>
        <h1>
          <Link to="/" className="no-link">
            EngGo
          </Link>
        </h1>
      </header>
      <div className="d-flex justify-content-center px-4 py-5">
        <form
          className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
          onSubmit={handleSignUp}
        >
          <div className="form-floating mb-3">
            <input
              type="email"
              value={email}
              name="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              style={{ width: "425px" }}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
            <p style={{ color: "#b3261e", display: hidden.email }}>
              *Email already in use. Please use a different email.
            </p>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={userName}
              name="userName"
              className="form-control"
              id="floatingUsername"
              placeholder="name@example.com"
              onChange={handleChange}
            />
            <label htmlFor="floatingUsername">Your username</label>
            <p style={{ color: "#b3261e", display: hidden.userName }}>
              *Username already exists. Please choose another one.
            </p>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              value={password}
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handleChange}
              onBlur={() => {
                if (confirmPass !== password && confirmPass !== "")
                  setHidden({
                    email: "none",
                    userName: "none",
                    password: "",
                    fill: "none",
                  });
                else
                  setHidden({
                    email: "none",
                    userName: "none",
                    password: "none",
                    fill: "none",
                  });
              }}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              value={confirmPass}
              name="confirmPass"
              className="form-control"
              id="checkPassword"
              placeholder="Password"
              onChange={handleChange}
              onBlur={() => {
                if (confirmPass !== password)
                  setHidden({
                    email: "none",
                    userName: "none",
                    password: "",
                    fill: "none",
                  });
                else
                  setHidden({
                    email: "none",
                    userName: "none",
                    password: "none",
                    fill: "none",
                  });
              }}
            />
            <label htmlFor="checkPassword">Confirm Password</label>
            <p style={{ color: "#b3261e", display: hidden.password }}>
              *Confirm password does not match. Please try again.
            </p>
            <p style={{ color: "#b3261e", display: hidden.fill }}>
              *Please fill in all required fields.
            </p>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <hr className="my-4" />
          <small className="text-body-secondary">
            Already have an account?
            <Link to="/login">Log in</Link>
          </small>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default FormRegister;
