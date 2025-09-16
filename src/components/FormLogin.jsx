import React, { use, useState } from "react";
import axios from "axios";
import myPicture from "../Img/LoginPicture.jpg";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
function FormLogin() {
  const navigate=useNavigate();
  const [hidden, setHidden] = useState("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(e) {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }
  async function handleLogin(e){
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:4000/login",{
        email:email,
        password:password
      })
      const result=response.data;
      if (result.success){
        navigate("/dashboard/content",{state:result.user});
      }
      else{
        setHidden("");
      }
    }
    catch(err){
      console.error(err);
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
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={myPicture}
              className="d-block mx-lg-auto img-fluid"
              alt="Holder Picture"
              width="700"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleLogin}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label htmlFor="floatingPassword">Password</label>
                <p style={{ color: "#b3261e", display: hidden }}>
                  *Invalid username or password.
                </p>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                Don't have any account?
                <Link to="/register">Sign up </Link>
                now to start learn English with us.
              </small>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default FormLogin;
