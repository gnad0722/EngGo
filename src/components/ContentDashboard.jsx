import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function ContentDashboard(props) {
  const navigate = useNavigate();
  const userData=props.userData;
  async function handleClick(){
    try{
      const response=await axios.get(`http://localhost:4000/login/${userData.id}`);
      navigate("/dashboard/exercise",{state:{
        id: userData.id,
        userName:userData.userName,
        email: userData.email,
        listVocab: response.data.listVocab
      }})
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Welcome</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Start your English journey with us today! Through simple lessons,
          engaging practice, and clear guidance, you will quickly build the
          confidence to use English naturally in real conversations.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={handleClick}
          >
            Let’s Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentDashboard;
