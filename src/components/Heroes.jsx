import React from "react";
import myPicture from "../Img/study.jpg";
import Header from "./Header";
import Footer from "./Footer";
function Heroes() {
  return (
    <div>
      <Header/>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={myPicture}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Learn English-Simple, Fun, Effective
            </h1>

            <p className="lead">
              Join short, interactive lessons and real-life practice activities
              designed to help you build vocabulary, improve pronunciation, and
              speak English with confidence in everyday situations.
            </p>
          </div>
        </div>
      </div>
       <Footer/>
    </div>
  );
}
export default Heroes;
